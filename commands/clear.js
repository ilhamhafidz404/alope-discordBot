const { Collection } = require("discord.js");
const cooldown = new Collection();

module.exports = {
  name: "clear",
  description: "command !clear",
  execute(message, args) {
    if (!cooldown.has(message.author.id)) {
      if (!args[1]) {
        message.reply("Masukan jumlah chat yang ingin dihapus");
      } else {
        message.channel.bulkDelete(args[1]);
      }

      cooldown.set(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      });
    }
  },
};
