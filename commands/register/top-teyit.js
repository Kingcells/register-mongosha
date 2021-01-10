const {DatabaseManager} = require("@aloshai/mongosha");
const { MessageEmbed } = require("discord.js");
const db = DatabaseManager.getDatabase("REGISTER")
const settings = require("../../settings.json")
const moment = require("moment")
module.exports.run = async (client, message, args) => {

  let teyit = await db.get(`kayıt`) || 0;

  let data = Object.keys(teyit);
  let dataTop = data.filter(x => message.guild.members.cache.has(x)).sort((a, b) => Number((teyit[b].erkek || 0) + (teyit[b].kadın || 0)) - Number((teyit[a].erkek) + (teyit[a].kadın))).map((value, index) => `\`${index+1}.\` ${message.guild.members.cache.get(value)} adlı üyenin toplam **${(teyit[value].erkek || 0) + (teyit[value].kadın || 0)}** (\`${teyit[value].erkek || 0}\` erkek, \`${teyit[value].kadın || 0}\` kadın)`).splice(0, 20).join("\n");
  
  
  let kayra = new MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
  .setDescription(dataTop || "Herhangi bir kayıt verisi bulamadım.")
  .setColor(settings.colors.magentaColor)
  .setTimestamp()

  message.channel.send(kayra)



}

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["top-teyit","top"]
};

module.exports.help = {
  name: 'top'
};
