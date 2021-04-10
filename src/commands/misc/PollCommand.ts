import { Command } from "../../structures/Command";

const MathCommand: Command = {
  name: "poll",
  description: "Creates a poll",
  category: "misc",
  aliases: ["vote", "ballot"],
  run(client, message, args) {},
};

export = MathCommand;
