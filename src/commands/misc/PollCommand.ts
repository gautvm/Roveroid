import { Command } from "../../structures/Command";

const MathCommand: Command = {
  name: "poll",
  description: "Creates a poll",
  category: "misc",
  aliases: ["vote", "ballot"],
  run(client, message, args) {
    if (!message.member?.permissions.has("MANAGE_CHANNELS")) {
      return message.channel.send(
        client.embed(
          {
            description:
              "You need to have the **Manage Channels** permission!s",
          },
          message
        )
      );
    }
  },
};

export = MathCommand;
