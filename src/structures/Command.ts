import { Astronova } from "../client/Client";
import { Message } from "discord.js";

export interface Command {
  name: string;
  description: string;
  category: string;
  aliases?: Array<string>;
  cooldown?: number;
  usage?: string;
  ownerOnly?: boolean;
  run: (client: Astronova, message: Message, args: string[]) => void;
}
