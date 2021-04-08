import { Astronova } from "../client/Client";
import { Message } from "discord.js";

export interface Event {
  name: string;
  run: (client: Astronova, message: Message, args: string[]) => void;
}
