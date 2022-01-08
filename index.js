const Discord = require("discord.js");
const Bot = new Discord.Client();

const token = "OTI5Mzk0NzkyMjIyMzIyNzU5.YdmsWQ.mEepZvwe_XeXvhixpBZT42t52l4";

Bot.on("ready", () => {
  console.log("ready");
});

Bot.login(token);
