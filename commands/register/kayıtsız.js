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

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  if (!user) return message.channel.send("Kayıtsıza atmak için bir üye etiketlemelisin.")
  
  user.roles.cache.has(settings.roleSettings.booster) ? user.roles.set(settings.roleSettings.unregisteredRole.concat(settings.roleSettings.booster)) : user.roles.set(settings.roleSettings.unregisteredRole);
  user.setNickname(`${settings.serverSettings.serverTag} İsim | Yaş`)

  message.channel.send(`${user} üyesi başarıyla kayıtsıza atıldı.`)
  return

}

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıtsız"]
};

module.exports.help = {
  name: 'kayıtsız'
};