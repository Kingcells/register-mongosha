const { Client, MessageEmbed } = require("discord.js");
const moment = require("moment")
const settings = require("../settings.json")

/**
 * @param {Client} client
 */
module.exports = async (member) => {
    let channel = member.guild.channels.cache.get(settings.channelSettings.register);

    let embed = new MessageEmbed();
    embed.setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
    embed.setDescription(`Hoş geldin ${member}, seninle birlikte **${member.guild.memberCount}** üyeye ulaştık!
  
    Bu hesap \`${moment(member.user.createdTimestamp).format("LLL")}\` zamanında açılmış. (${moment(member.user.createdAt).add(5, 'days').fromNow().replace("birkaç saniye önce", " ")}.)
    
    Ses teyit odalardan birisine geçersen <@&${settings.roleSettings.registerer}> rolündeki kişiler seninle ilgilenecektir.
    
    Kayıt olarak <#${settings.channelSettings.rules}> kanalındaki kuralları kabul etmiş olursun.
    `);
    embed.setColor(settings.colors.magentaColor);
    channel.send(embed)
};
