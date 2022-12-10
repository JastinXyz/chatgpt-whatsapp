async function main() {
  const { ChatGPTAPI } = await import("chatgpt");
  const { Client } = require("@mengkodingan/ckptw");
  const ms = require("ms");
  require("dotenv").config();

  const bot = new Client({
    name: "ChatGPT",
    prefix: "!",
    autoRead: true,
  });

  bot.ev.once("ready", (m) => console.log(`ready at ${m.user.id}`));

  const api = new ChatGPTAPI({
    sessionToken: process.env.SESSION_TOKEN,
  });

  await api.ensureAuth();
  let c = api.getConversation();

  bot.command({
    name: "chatgpt",
    cooldown: 10000,
    code: async (ctx) => {
      let args = ctx.args;
      if (ctx.isCooldown) {
        ctx.reply({
          text: `⏰ You are in Cooldown, wait ${ms(ctx.cooldownRemaining, {
            long: true,
          })}`,
        });
      } else {
        if (!args[0]) {
          ctx.reply({
            text: `Usage: \`\`\`${
              ctx.used.prefix + ctx.used.command
            } <args>\`\`\`\ne.g: \`\`\`${
              ctx.used.prefix + ctx.used.command
            } generate a code to count 1 to 10 in js\`\`\``,
          });
        } else {
          try {
            let argumen = args.join(" ");
            let resp = await c.sendMessage(argumen);
            ctx.reply({ text: resp });
          } catch {
            ctx.reply({ text: '💀 Something went wrong... Try again.' })
          }
        }
      }
    },
  });

  bot.launch();
}

main();
