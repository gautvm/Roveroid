import { Event } from "../../structures/Event";

const ReadyEvent: Event = {
  name: "ready",
  run(client, message, args) {
    console.log("ready");

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
