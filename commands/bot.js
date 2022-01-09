const { MessageEmbed } = require("discord.js");
const info = require("./../info.json");

module.exports = {
  name: "bot",
  description: "command !bot",
  execute(message, args) {
    if (!args[1]) {
      const botEMbed = new MessageEmbed()
        .setTitle("----- BOT Informasion -----")
        .addField("#command", 'Gunakan PREFIX "!" untuk memulai command')
        .addField("author", "Cek Pembuat BOT")
        .addField("name", "Cek nama BOT")
        .addField("version", "Cek versi BOT")
        .addField("birth", "Cek Tanggal Development BOT")
        .addField("about", "Cek Semua Info Tentang BOT")
        .setFooter("contoh penggunaan Command = !bot name")
        .setColor("FF6363");

      message.reply(botEMbed);
    } else if (args[1] == "author") {
      message.reply(`${info.author}`);
    } else if (args[1] == "version") {
      message.reply(`Mao ${info.version}`);
    } else if (args[1] == "name") {
      message.reply(`${info.name}`);
    } else if (args[1] == "birth") {
      message.reply("Di Develop pada 08 Januari 2022");
    } else if (args[1] == "about") {
      const botInfoEMbed = new MessageEmbed()
        .setTitle("----- Seputar Tetang BOT -----")
        .setDescription(
          "Helo, my Name is Mao, Aku adalah BOT setia yang melayani ILHAM HAFIDZ sebagai author. Aku mulai di develop sekitar pada tanggal 08 Januari 2022 dan sekarang aku sudah berada di Bot Veesi 1.0 BETA dan masih dalam tahap pengembangan"
        )
        .setColor("FFAB76");
      message.reply(botInfoEMbed);
    }
  },
};
