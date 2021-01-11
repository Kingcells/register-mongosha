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

  if (message.channel.id !== settings.channelSettings.register) return message.channel.send(`Burası bir kayıt kanalı değil. Kayıt kanalı: <#${settings.channelSettings.register}>`)

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!args[1]) return message.channel.send("Bir isim girmelisin. Eğer boşluk bırakmak istersen `_` işaretini kullanabilirsin.")
  if (!args[2]) return message.channel.send("Bir yaş girmelisin.")
  let name = args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase();
  let age = args[2]
  if (age < 13) return message.channel.send(`Kayıt ettiğin üyenin yaşı 13'ten küçük olamaz.`)


  if (!user) return message.channel.send("Erkek olarak kayıt edeceğin kişiyi etiketlemelisin.")
  if (!name) return message.channel.send("Erkek olarak kayıt edeceğin kişinin ismini yazmalısın.")
  if (!age) return message.channel.send("Erkek olarak kayıt edeceğin kişinin yaşını yazmalısın.")

  user.roles.cache.has(settings.roleSettings.booster) ? user.roles.set(settings.roleSettings.boyRole.concat(settings.roleSettings.booster)) : user.roles.set(settings.roleSettings.boyRole);
  user.setNickname(`${settings.serverSettings.serverTag} ${name.replace("_", " ")} | ${age}`)

  await db.push(`kayıt.öncekibilgiler.${user.id}`, {
    Registerer: message.author.id,
    Name: args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase(),
    Age: args[2],
    Time: Date.now(),
    Sex: "E"
  })

  await db.push(`kayıt.yetkili.bilgiler.${message.author.id}`, {
    Registered: user.id,
    Name: args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase(),
    Age: args[2],
    Time: Date.now(),
    Sex: "E",
  }).then(await db.add(`kayıt.${message.author.id}.erkek`, +1))
  let kadınsayı = await db.get(`kayıt.${message.author.id}.kadın`)
  let erkeksayı = await db.get(`kayıt.${message.author.id}.erkek`)

  let x = await db.get(`kayıt.öncekibilgiler.${user.id}`)
  let isimler = x.length > 0 ? x.map((value, index) => `\`${index + 1}.\` Ad: ${value.Name.replace("_", " ")} | ${value.Age} (Kaydeden: <@${value.Registerer}> \`${moment(value.Time).format("DD.MM.YY")}\`) **[${value.Sex}]**`).join(`\n`) : "Bu üyenin geçmiş isimleri bulunamadı!";
  let embed = new MessageEmbed()
    .setAuthor(user.user.tag, user.user.avatarURL({ dynamic: true }))
    .setColor(settings.colors.magentaColor)
    .setDescription(`${user} kişisinin adı \`${name.replace("_", " ")} | ${age}\` olarak kaydedildi. Rolleri başarıyla Erkek rollerini başarıyla verdim.

**Önceki İsimler**
${isimler}
`)
    .setFooter(`${message.author.username} yetkilisi toplam ${kadınsayı || "0"} kadın, ${erkeksayı || "0"} erkek kayıt etmiş.`)

  message.channel.send(embed)
  message.guild.channels.cache.get(settings.channelSettings.wlcmessageChannel).send(`${user} üyesi **erkek** olarak aramıza katıldı.`)
}

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["erkek", "e"]
};

module.exports.help = {
  name: 'erkek'
};