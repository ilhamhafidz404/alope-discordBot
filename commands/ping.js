const { Collection } = require("discord.js");
const author = require("./author");
const cooldown = new Collection();

module.exports = {
  name: "ping",
  description: "Command Ping",
  execute(message) {
    if (!cooldown.has(message.author.id)) {
      message.reply("pong!");

      cooldown.set(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 1000 * 20);
    }
  },
};
