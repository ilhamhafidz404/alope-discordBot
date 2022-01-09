const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "author",
  description: "command !author",
  execute(message, args) {
    if (!args[1]) {
      const authorEMbed = new MessageEmbed()
        .setTitle("----- AUTHOR Informasion -----")
        .addField("#command", 'Gunakan PREFIX "!" untuk memulai command')
        .addField("name", "Cek Nama Author")
        .addField("ig", "Intip Instagram Author")
        .addField("fb", "Intip Facebook Author")
        .addField("yt", "Kunjungi Youtube Channel Author")
        .addField("age", "Cek Umur Author")
        .addField("sex", "Cek Jenis Kelamin Author")
        .setFooter("contoh penggunaan Command = !author name")
        .setColor("22577E");

      message.reply(authorEMbed);
    } else if (args[1] == "name") {
      message.reply("Ilham Hafidz");
    } else if (args[1] == "ig") {
      message.reply("https://www.instagram.com/xxhamz_/");
    } else if (args[1] == "fb") {
      message.reply("https://www.facebook.com/ilham.hafidz.374/");
    } else if (args[1] == "yt") {
      message.reply("https://www.youtube.com/channel/UCR0Gz3-3zuqQuuePqNq9-JA");
    } else if (args[1] == "age") {
      message.reply("18 tahun");
    } else if (args[1] == "sex") {
      message.reply("Men");
    }
  },
};
