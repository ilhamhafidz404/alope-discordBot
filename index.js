const { Client, MessageEmbed } = require("discord.js");
const Bot = new Client();

Bot.on("ready", () => {
  console.log("ready");
});

Bot.on("message", (message) => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "ping":
      message.reply("pong!");
      break;
    case "halo":
      message.reply("Halo Mao is here !!");
      break;
    case "bot":
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
        message.reply("Ilham Hafidz");
      } else if (args[1] == "version") {
        message.reply("Mao v.1.0 BETA");
      } else if (args[1] == "name") {
        message.reply("Mao");
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
      break;
    case "author":
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
        message.reply(
          "https://www.youtube.com/channel/UCR0Gz3-3zuqQuuePqNq9-JA"
        );
      } else if (args[1] == "age") {
        message.reply("18 tahun");
      } else if (args[1] == "sex") {
        message.reply("Men");
      }
  }
});

Bot.login(token);
