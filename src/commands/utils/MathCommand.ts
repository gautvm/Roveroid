import { Command } from "../../structures/Command";
import { evaluate } from "mathjs";

const MathCommand: Command = {
  name: "math",
  description: "Evaluates mathematics",
  category: "utils",
  run(client, message, args) {},
};

export = MathCommand;
