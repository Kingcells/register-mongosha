const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const fs = require('fs');
require('./util/eventLoader.js')(client);
const { MessageEmbed } = require("discord.js")
const settings = require("./settings.json")
const cli = require("cli-color");
const load = cli.green.bold
const bgLoad = cli.bgWhite.black
const cmds = cli.yellow
const token = cli.cyan
const error = cli.redBright
const fancy = cli.magentaBright

const {Database, DatabaseManager} = require("@aloshai/mongosha");
DatabaseManager.connect(settings.botSettings.mongoURL);
const db = new Database("REGISTER");


const log = message => {
  console.log(bgLoad(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`) + ` ${message}`);
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
   if (err) console.error(err);
   files.forEach(f => {
 fs.readdir(`./commands/${f}/`, (err, filess) => {
   if (err) console.error(err);
   log(load(`${filess.length} command will be loaded from commands/${f} folder.`));
   filess.forEach(fs => {
     let props = require(`./commands/${f}/${fs}`);
     log(cmds(`Loaded: ${props.help.name}.`));
     client.commands.set(props.help.name, props);
     props.conf.aliases.forEach(alias => {
       client.aliases.set(alias, props.help.name);
     });
    });
   });
  });
 });

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === settings.botSettings.owners) permlvl = 4;
    return permlvl;
};

client.login(settings.botSettings.token).then(function() {
  console.log(bgLoad(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`) + token(` Successfully connected to the token.`))
}, function(err) {
  console.log(bgLoad(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`) + error(` Couldn't connect to token! ${err}`))
  setInterval(function() {
    process.exit(0)
  }, 5000)
}
)

client.on("ready", async () => {
  client.channels.cache.get(settings.botSettings.botVoiceChannelID).join()
.then(function() {
  console.log(bgLoad(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`) + fancy(` Connected to the audio channel.`))
  setInterval(function() {
  client.channels.cache.get(settings.botSettings.botVoiceChannelID).join()
  }, 20000);
}, function(err) {
  console.log(bgLoad(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`) + error(` Couldn't Connected to the audio channel. ${err}`))
  setInterval(function() {
    process.exit(0)
  }, 20000);
})

})

client.on("guildMemberAdd", async (member) => {

  let created = moment(member.user.createdTimestamp).format("LLL")
  var x = moment(member.user.createdAt).add(5, 'days').fromNow()
  x = x.replace("birkaç saniye önce", " ")

  let channel = member.guild.channels.cache.get(settings.channelSettings.register)

  let kayra = new MessageEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL({dynamic: true}))
  .setDescription(`Hoş geldin ${member}, seninle birlikte **${member.guild.memberCount}** üyeye ulaştık!

  Bu hesap \`${created}\` zamanında açılmış. (${x}.)
  
  Ses teyit odalardan birisine geçersen <@&${settings.roleSettings.registerer}> rolündeki kişiler seninle ilgilenecektir.
  
  Kayıt olarak <#${settings.channelSettings.rules}> kanalındaki kuralları kabul etmiş olursun.
  `)
  .setColor(settings.colors.magentaColor)
  channel.send(kayra)

})