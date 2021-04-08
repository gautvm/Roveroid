import { Client } from "discord.js";
import glob from "glob";
import { promisify } from "util";

import { Command } from "../structures/Command";
import { Event } from "../structures/Event";

const globPromise = promisify(glob);
export class Astronova extends Client {
  public prefix: string = "an!";
  public commands: Array<Command> = new Array();
  public events: Array<Event> = new Array();

  public constructor() {
    super();
  }

  public async commandHandler() {
    const commandFiles = await globPromise(
      `${__dirname}/../commands/**/*{.js,.ts}`
    );

    for (const file of commandFiles) {
      const command = (await import(file)) as Command;
      this.commands.push(command);
    }
  }

  public async eventHandler() {
    const eventFiles = await globPromise(
      `${__dirname}/../events/**/*{.js,.ts}`
    );

    for (const file of eventFiles) {
      const event = (await import(file)) as Event;
      this.events.push(event);
    }
  }

  public start() {
    this.commandHandler();
    this.eventHandler();

    this.on("ready", async () => {
      console.log("Bot started");
    });

    this.on("message", (message) => {
      if (message.author.bot) {
        return;
      }

      const [commandName, ...args] = message.content
        .slice(this.prefix.length)
        .split(/ +/);

      const command = this.commands.find((c) => c.name === commandName);

      if (command) {
        command.run(this, message, args);
      }
    });

    this.login("");
  }
}
