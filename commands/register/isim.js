const {DatabaseManager} = require("@aloshai/mongosha");
const { MessageEmbed } = require("discord.js");
const db = DatabaseManager.getDatabase("REGISTER")
const settings = require("../../settings.json")
const moment = require("moment")
module.exports.run = async (client, message, args) => {

  let cezarolu = settings.roleSettings.registerer
  if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.cache.has(cezarolu)) {
      return message.channel.send(new MessageEmbed().setAuthor("Yetersiz Yetki").setDescription(`**\`»\`** Bu komutu kullanabilmek için \`Admin\` veya \`Kayıt Sorumlusu\` yetkisine sahip olman gerekmekte.`).setColor(settings.colors.redColor)).then(x => x.delete({timeout:6500}));
  }

  if (message.channel.id !== settings.channelSettings.register) return message.channel.send(`Burası bir kayıt kanalı değil. Kayıt kanalı: <#${settings.channelSettings.register}>`)

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  if (!args[1]) return message.channel.send("Bir isim girmelisin. Eğer boşluk bırakmak istersen `_` işaretini kullanabilirsin.")
  if (!args[2]) return message.channel.send("Bir yaş girmelisin.")
  let name = args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase();
  let age = args[2]
  if (age < 13) return message.channel.send(`İsmini değiştiğin üyenin yaşı 13'ten küçük olamaz.`)

  if (!user) return message.channel.send("İsmini değiştireceğin kişiyi etiketlemelisin.")
  if (!name) return message.channel.send("İsmini değiştireceğin kişinin ismini yazmalısın.")
  if (!age) return message.channel.send("İsmini değiştireceğin kişinin yaşını yazmalısın.")

  user.setNickname(`${settings.serverSettings.serverTag} ${name} | ${age}`)

  message.channel.send(`Başarıyla ${user} üyesinin ismi değişti.`)

}

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["isim","i"]
};

module.exports.help = {
  name: 'isim'
};