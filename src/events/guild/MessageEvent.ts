import { Event } from "../../structures/Event";

const MessageEvent: Event = {
  name: "message",
  run(client, message) {
    if (message.author.bot) {
      return;
    }

    const [commandName, ...args] = message.content
      .slice(client.prefix.length)
      .split(/ +/);

    const command = client.commands.find((c) => c.name === commandName);

    if (command) {
      command.run(client, message, args);
    }
  },
};

export = MessageEvent;
