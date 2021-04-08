import { Command } from "../../structures/Command";

const PingCommand: Command = {
  name: "ping",
  description: "Ping!",
  run(client, message, args) {
    const num = 8;
    message.channel.send(num);
  },
};

export = PingCommand;
