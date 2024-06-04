const { WebSocket } = require("ws");

const ws = new WebSocket("ws://127.0.0.1:8080", { perMessageDeflate: false });
let verified = false;
ws.on("open", () => {
  verified = true;
  ws.send("lol");
});

function sendBackendTopic(topic, characters) {
  const obj = { topic: topic, characters: characters };

  ws.send(Buffer.from(JSON.stringify(obj)));
}

module.exports = {
  sendBackendTopic,
};
