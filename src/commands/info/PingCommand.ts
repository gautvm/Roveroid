import { Command } from "../../structures/Command";

const PingCommand: Command = {
  name: "ping",
  description:
    "Provides the latency of the WebSocket, as well as the Discord API latency.",
  category: "info",
  aliases: ["latency"],
  run(client, message, args) {
    message.channel.send("Pinging...").then((msg) => {
      msg.edit(
        `WebSocket Latency: **${client.ws.ping}** MS, Discord API Latency: **${
          msg.createdTimestamp - message.createdTimestamp
        }** MS`
      );
    });
  },
};

export = PingCommand;
