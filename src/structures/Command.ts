import { Astronova } from "../client/Client";
import { Message } from "discord.js";

export interface Command {
  name: string;
  description: string;
  aliases: Array<string>;
  cooldown: number;
  run: (client: Astronova, message: Message, args: string[]) => void;
}
