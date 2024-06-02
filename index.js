const { Client, Events, GatewayIntentBits } = require("discord.js");
const { config } = require("dotenv");
const WebSocket = require("ws");

config();

const ws = new WebSocket("ws://127.0.0.1:8080");
ws.on("open", (open) => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  });

  client.once(Events.MessageCreate, async (message) => {
    if (message.content.substring(0, 6) === "!topic") {
      try {
        app.post("127.0.0.7:3000", (req, res) => {
          res.send(message);
        });
      } catch (e) {
        message.channel.send("An error occured...");
        console.log(e);
      }
    }
  });

  client.login(process.env.TOKEN);
});
