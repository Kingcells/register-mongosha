const { DatabaseManager } = require("@aloshai/mongosha");
const { MessageEmbed, Message, Client } = require("discord.js");
const db = DatabaseManager.getDatabase("REGISTER")
const settings = require("../../settings.json")
const moment = require("moment")

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
  let check = await db.has(`kayıt.öncekibilgiler.${user.id}`)
  if (check === false) return message.channel.send("Bu üyenin herhangi bir isim verisine ulaşamadım.")

  let fetch = await db.get(`kayıt.öncekibilgiler.${user.id}`)
  let isimler = fetch.length > 0 ? fetch.map((value, index) => `• No: ${index + 1} \n- Kayıtçı: ${value.Registerer} \n- Adı: ${value.Name} \n- Yaşı: ${value.Age} \n- Cinsiyeti: ${value.Sex} \n- Tarihi: ${moment(value.Time).format("DD MMMM YYYY (HH:mm:ss)")}`).join(`\n\n`) : "Bu üyenin geçmiş isimleri bulunamadı!";

  message.channel.send(`[+] ${user.user.username} Üyesinin Önceki İsimleri [+] \n\n${isimler}`, { code: 'yaml', split: true })


}

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["isimler", "eski-isimler"]
};

module.exports.help = {
  name: 'isimler'
};