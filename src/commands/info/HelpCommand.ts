import { Command } from "../../structures/Command";

const HelpCommand: Command = {
  name: "help",
  description: "Gets information on all commands",
  category: "info",
  run(client, message, args) {
    if (!args.length) {
      message.channel.send(
        client.embed(
          {
            title: `Prefix: \`${client.prefix}\` | Commands: \`${client.commands.length}\` | Categories: \`${client.categories.size}\``,
            description:
              "Use `ro!help <command>` to get info on a specific command.",
            fields: [{ name: "Info", value: "`help`, `ping`" }],
          },
          message
        )
      );
    }
  },
};

export = HelpCommand;
