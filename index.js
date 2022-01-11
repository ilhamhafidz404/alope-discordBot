const { Client, Collection } = require("discord.js");
const Bot = new Client();

const token = "OTI5Mzk0NzkyMjIyMzIyNzU5.YdmsWQ.B4T-EJk06pd6SzGkqfNObk2nh30";
const PREFIX = "!";

const fs = require("fs");
const commands = new Collection();
const files = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of files) {
  const command = require(`./commands/${file}`);
  commands.set(command.name, command);
}

Bot.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find((ch) => ch.name == "lobby");
  const rules = member.guild.channels.cache.find((ch) => ch.name == "rules");

  if (!channel) return;

  if (member.guild.name === "ALOPE Community") {
    channel.send(
      `Halo ${member}, selamat datang di discord ALOPE Community. Sebelumnya diharapkan untuk baca peraturan dulu disini ${rules} yak`
    );
  }
});

Bot.on("ready", () => {
  console.log("ready");

  Bot.user
    .setActivity("ALOPE Community", {
      type: "LISTENING",
    })
    .catch(console.error());
});

Bot.on("message", (message) => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "ping":
      commands.get("ping").execute(message);
      break;
    case "halo":
      message.reply("Halo Mao is here !!");
      break;
    case "bot":
      commands.get("bot").execute(message, args);
      break;
    case "author":
      commands.get("author").execute(message, args);
      break;
    case "clear":
      commands.get("clear").execute(message, args);
      break;
  }
});

Bot.login(token);
