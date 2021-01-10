const moment = require("moment");
const Discord = require("discord.js");
const settings = require("../settings.json")

module.exports = async client => {
  client.user.setPresence({ activity: { name: settings.botSettings.botStatus }, status: "dnd" })
  


};
