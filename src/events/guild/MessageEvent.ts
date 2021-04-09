import { Event } from "../../structures/Event";

const MessageEvent: Event = {
  name: "message",
  run(client, message) {
    if (message.author.bot || !message.content.startsWith(client.prefix)) {
      return;
    }

    const [cmd, ...args] = message.content
      .slice(client.prefix.length)
      .split(/ +/);

    const command =
      client.commands.find((c) => c.name === cmd) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

    if (command) {
      command.run(client, message, args);
    }
  },
};

export = MessageEvent;
