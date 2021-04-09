import { Event } from "../../structures/Event";

const ReadyEvent: Event = {
  name: "ready",
  run(client, message, args) {
    client.logger.success(`Client started as ${client.user?.tag}`);

    client.user?.setPresence({
      activity: {
        type: "PLAYING",
        name: "an!help",
      },

      status: "online",
    });
  },
};

export = ReadyEvent;
