import { Roveroid } from "../client/Client";
import { Message } from "discord.js";

export interface Event {
  name: string;
  run: (client: Roveroid, message: Message, args: string[]) => void;
}
