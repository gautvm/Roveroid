import {
  Client,
  Collection,
  Message,
  MessageEmbed,
  MessageEmbedOptions,
} from "discord.js";
import consola, { Consola } from "consola";
import { PrismaClient } from "@prisma/client";
import glob from "glob";
import { promisify } from "util";
import dotenv from "dotenv";

import { Command } from "../structures/Command";
import { Event } from "../structures/Event";
import { Utils } from "../utils/Utils";

export class Roveroid extends Client {
  public prefix: string = "ro!";
  public globPromise = promisify(glob);
  public db: PrismaClient = new PrismaClient();
  public utils: Utils;
  public logger: Consola = consola;
  public commands: Collection<string, Command> = new Collection();
  public events: Collection<string, Event> = new Collection();
  public categories = new Set();
  public cooldowns = new Map();
  public owners: Array<string> = ["66176203648034406"];

  public constructor() {
    super();
    dotenv.config();
  }

  public async commandHandler() {
    const commandFiles = await this.globPromise(
      `${__dirname}/../commands/**/*{.js,.ts}`
    );

    for (const file of commandFiles) {
      const command = (await import(file)) as Command;

      this.commands.set(command.name, command);
      this.categories.add(command.category);

      console.log(`Loaded command ${command.name} in ${command.category}`);
    }
  }

  public async eventHandler() {
    const eventFiles = await this.globPromise(
      `${__dirname}/../events/**/*{.js,.ts}`
    );

    for (const file of eventFiles) {
      const event = (await import(file)) as Event;
      this.events.set(event.name, event);

      this.on(event.name, event.run.bind(null, this));

      console.log(`Loaded event ${event.name}`);
    }
  }

  public start() {
    this.commandHandler();
    this.eventHandler();
    this.login(process.env.API_KEY);
  }

  public embed(data: MessageEmbedOptions, message: Message): MessageEmbed {
    return new MessageEmbed({
      color: "a44908",
      ...data,
      footer: {
        text: `${message.author.tag} | Roveroid`,
        iconURL: message.author.displayAvatarURL({
          dynamic: true,
          format: "png",
        }),
      },
    });
  }
}
