module.exports = {
  name: "ping",
  description: "Command Ping",
  execute(message) {
    message.reply("pong!");
  },
};
