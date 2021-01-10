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

  let embed = new MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
  .setTitle("Kayıt Komutları")
  .setDescription(`Selam! Bu bot sunucundaki üyeleri kolayca kayıt edebilmen için tasarlandı. Aşağıda komutların genel bilgisine ulaşabilirsin. Unutma bir üyenin iki ismi varsa boşluk koymak için \`_\` işaretini kullanabilirsin.

  __**Erkek Üye Kayıdı**__
 \`>\` Erkek üyeleri kaydetmek için: \`erkek [etiket veya ID] [adı] [yaş]\`

__**Kadın Üye Kayıdı**__
\`>\` Kadın üyeleri kaydetmek için: \`kadın [etiket veya ID] [adı] [yaş]\`

__**En Fazla Kayıt Eden Kişilerin Listesi**__
\`>\` Sunucuda en fazla kayıt sayısına sahip kişileri görmek için: \`top\`

__**Eski İsimler**__
\`>\` Seçilen üyenin eskiden nasıl kayıt edildiğini görmek için: \`isimler (etiket veya ID)\`

__**Teyit Bilgileri İçin**__
\`>\` Kendinin veya bir üyenin teyit bilgilerini görmek için: \`teyitbilgi\` (etiket veya ID)

__**Kaydedilenleri Görmek İçin**__
\`>\` Kendinin veya bir üyenin kaydettiği bütün kişileri görmek için: \`kayıtlılar (etiket veya ID)\`

__**Kayıtsıza Atmak İçin**__
\`>\` Bir üyenin bütün rollerini alıp kayıtsız rolü vermek için: \`kayıtsız [etiket veya ID]\`
  `)
  .setColor(settings.colors.magentaColor)

message.channel.send(embed)

}

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım"]
};

module.exports.help = {
  name: 'yardım'
};
