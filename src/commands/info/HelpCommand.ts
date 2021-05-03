import { Command } from "../../structures/Command";

const HelpCommand: Command = {
  name: "help",
  description: "Gets information on all commands",
  category: "info",
  usage: "ro!help <command>",
  run(client, message, args) {
    if (!args.length) {
      return message.channel.send(
        client.embed(
          {
            title: `Prefix: \`${client.prefix}\` | Commands: \`${client.commands.size}\` | Categories: \`${client.categories.size}\``,
            description:
              "Use `ro!help <command>` to get info on a specific command.",
            fields: [{ name: "Info", value: "`help`, `ping`" }],
          },
          message
        )
      );
    } else {
      const command = client.commands.has(args[0]);

      if (command) {
        const command = client.commands.get(args[0]);

        return message.channel.send(
          client.embed(
            {
              title: `Information on ${command.name}`,
              description: command.description,
            },
            message
          )
        );
      } else {
        return message.channel.send(
          client.embed({ description: "That command was not found!" }, message)
        );
      }
    }
  },
};

export = HelpCommand;
