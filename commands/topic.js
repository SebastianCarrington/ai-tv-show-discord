const { SlashCommandBuilder } = require("discord.js");
const { sendBackendTopic } = require("./../managers/websocket-manager.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("topic")
    .setDescription("Suggests a new topic for the AI")
    .addStringOption((option) =>
      option
        .setName("topic")
        .setDescription("The topic you want to suggest")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("character1")
        .setDescription("Character 1")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("character2")
        .setDescription("Character 2")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("character3")
        .setDescription("Character 3")
        .setRequired(false)
    )
    .addStringOption((option) =>
      option
        .setName("character4")
        .setDescription("Character 4")
        .setRequired(false)
    ),
  async execute(interaction) {
    const topic = interaction.options.getString("topic");
    const character1 = interaction.options.getString("character1");
    const character2 = interaction.options.getString("character2");
    const character3 = interaction.options.getString("character3", false);
    const character4 = interaction.options.getString("character4", false);

    sendBackendTopic({
      topic: topic,
      characters: [character1, character2, character3, character4],
    });
  },
};
