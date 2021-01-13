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

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 


    if (message.member.hasPermission("ADMINISTRATOR")) {
        if (!member) return message.channel.send("Selam! Senin yetkin `Administrator` seviyesinde olduğu için şu rolleri verebilirsin: `vip`, `diğer`, `şarkıcı`, `ekip`")
if (args[1] === "diğer") {
    member.roles.add(settings.roleSettings.otherRole).catch(err => {})
    message.channel.send(new MessageEmbed().setColor(settings.colors.myshlumColor).setDescription(`${member} üyesine başarıyla <@&${settings.roleSettings.otherRole}> rolünü verdin.`)).then(x => x.delete({timeout: 5000}))
    return
}

if (args[1] === "vip") {
    member.roles.add(settings.roleSettings.vipRole).catch(err => {})
    message.channel.send(new MessageEmbed().setColor(settings.colors.goldColor).setDescription(`${member} üyesine başarıyla <@&${settings.roleSettings.vipRole}> rolünü verdin.`)).then(x => x.delete({timeout: 5000}))
    return
}

if (args[1] === "şarkıcı") {
    member.roles.add(settings.roleSettings.musicianRole).catch(err => {})
    message.channel.send(new MessageEmbed().setColor(settings.colors.redColor).setDescription(`${member} üyesine başarıyla <@&${settings.roleSettings.musicianRole}> rolünü verdin.`)).then(x => x.delete({timeout: 5000}))
    return
}

if (args[1] === "ekip") {
    member.roles.add(settings.roleSettings.teamRole).catch(err => {})
    message.channel.send(new MessageEmbed().setColor(settings.colors.blackColor).setDescription(`${member} üyesine başarıyla <@&${settings.roleSettings.teamRole}> rolünü verdin.`)).then(x => x.delete({timeout: 5000}))
    return
}
return
    }

    if (message.member.hasPermission("BAN_MEMBERS")) {
        if (!member) return message.channel.send("Selam! Senin yetkin `Üyeleri Yasaklama` seviyesinde olduğu için şu rolleri verebilirsin: `şarkıcı`, `ekip`")

 if (args[1] === "diğer") {
            message.channel.send(new MessageEmbed().setColor(settings.colors.myshlumColor).setDescription(`${member} üyesine <@&${settings.roleSettings.otherRole}> rolünü vermek için yeterli yetkiye sahip değilsin..`)).then(x => x.delete({timeout: 5000}))
            return
 }

if (args[1] === "vip") {
            message.channel.send(new MessageEmbed().setColor(settings.colors.goldColor).setDescription(`${member} üyesine <@&${settings.roleSettings.vipRole}> rolünü vermek için yeterli yetkiye sahip değilsin..`)).then(x => x.delete({timeout: 5000}))
            return
 }
        

if (args[1] === "şarkıcı") {
    member.roles.add(settings.roleSettings.musicianRole).catch(err => {})
    message.channel.send(new MessageEmbed().setColor(settings.colors.redColor).setDescription(`${member} üyesine başarıyla <@&${settings.roleSettings.musicianRole}> rolünü verdin.`)).then(x => x.delete({timeout: 5000}))
    return
}

if (args[1] === "ekip") {
    member.roles.add(settings.roleSettings.teamRole).catch(err => {})
    message.channel.send(new MessageEmbed().setColor(settings.colors.blackColor).setDescription(`${member} üyesine başarıyla <@&${settings.roleSettings.teamRole}> rolünü verdin.`)).then(x => x.delete({timeout: 5000}))
    return
}
       return
    } else {
        message.channel.send("Bu eylemleri gerçekleştirebilecek kadar yetkin yok.").then(x => x.delete({timeout: 5000}))
        return
    }

}

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-ver"]
};

module.exports.help = {
  name: 'rol'
};
