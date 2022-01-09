module.exports = {
  name: "clear",
  description: "command !clear",
  execute(message, args) {
    if (!args[1]) {
      message.reply("Masukan jumlah chat yang ingin dihapus");
    } else {
      message.channel.bulkDelete(args[1]);
    }
  },
};
