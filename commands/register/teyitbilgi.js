const { DatabaseManager } = require("@aloshai/mongosha");
const { MessageEmbed, Client, Message } = require("discord.js");
const db = DatabaseManager.getDatabase("REGISTER");
const settings = require("../../settings.json");
const moment = require("moment");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */
module.exports.run = async (client, message, args) => {
  let cezarolu = settings.roleSettings.registerer
  if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.cache.has(cezarolu)) {
    return message.channel.send(new MessageEmbed().setAuthor("Yetersiz Yetki").setDescription(`**\`»\`** Bu komutu kullanabilmek için \`Admin\` veya \`Kayıt Sorumlusu\` yetkisine sahip olman gerekmekte.`).setColor(settings.colors.redColor)).then(x => x.delete({ timeout: 6500 }));
  }

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
  if (!user) return message.channel.send("Bir üyeyi etiketlemelisin.")
  let check = await db.has(`kayıt.yetkili.bilgiler.${user.user.id}`)
  if (check === false) return message.channel.send("Bu üyenin herhangi bir kayıt verisine ulaşamadım.")

  let check2 = await db.has(`kayıt.${user.user.id}`)
  if (check2 === false) return message.channel.send("Bu üyenin herhangi bir kayıt verisine ulaşamadım.")


  let fetch = await db.get(`kayıt.yetkili.bilgiler.${user.id}`)
  let kadınsayı = await db.get(`kayıt.${message.author.id}.kadın`) || 0
  let erkeksayı = await db.get(`kayıt.${message.author.id}.erkek`) || 0

  let embed = new MessageEmbed()
    .setAuthor(user.user.tag, user.user.avatarURL({ dynamic: true }))
    .setTitle("Teyit Bilgisi")
    .setThumbnail(user.user.avatarURL({ dynamic: true }))
    .setDescription(`\`•\` **Toplam Kayıt:** ${kadınsayı || 0 + erkeksayı || 0}
\`-\` Kadın Kayıt: ${kadınsayı || "0"}
\`-\` Erkek Kayıt: ${erkeksayı || "0"} 

**İlk Kayıt Ettiği Kişi**
\`•\` **No:** 1
\`-\` ID: \`${fetch[0].Registered}\` (<@${fetch[0].Registered}>) 
\`-\` Ad: ${fetch[0].Name}
\`-\` Yaş: ${fetch[0].Age}
\`-\` Cinsiyet: ${fetch[0].Sex}
\`-\` Tarih: \`${moment(fetch[0].Time).format("DD MMMM YYYY (HH:mm:ss)")}\`

**Son Kayıt Ettiği Kişi**
\`•\` **No:** ${fetch.length}
\`-\` ID: \`${fetch[fetch.length - 1].Registered}\` (<@${fetch[fetch.length - 1].Registered}>)
\`-\` Ad: ${fetch[fetch.length - 1].Name}
\`-\` Yaş: ${fetch[fetch.length - 1].Age}
\`-\` Cinsiyet: ${fetch[fetch.length - 1].Sex}
\`-\` Tarih: \`${moment(fetch[fetch.length - 1].Time).format("DD MMMM YYYY (HH:mm:ss)")}\`
`)
    .setColor(settings.colors.magentaColor)

  message.channel.send(embed)

}

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["teyitbilgi", "teyit-bilgi", "tbilgi", "bilgi"]
};

module.exports.help = {
  name: 'teyitbilgi'
};