import { Command } from "../../structures/Command";

const HelpCommand: Command = {
  name: "help",
  description: "Gets information on all commands",
  category: "info",
  run(client, message, args) {},
};

export = HelpCommand;
