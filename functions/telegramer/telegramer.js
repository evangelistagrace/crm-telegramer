const axios = require("axios").default;
const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env.TELEGRAM_BOT_TOKEN);

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
      console.log(event.body.message)
      console.log('success')
      slimbot.sendMessage(process.env.TELEGRAM_CHAT_ID, 'Someone just starred your repo');

    /*
    const body = JSON.parse(event.body);
    const username = body.sender.login;
    const avatarUrl = body.sender.avatar_url;
    const repoName = body.repository.name;
    const res = await axios.post(process.env.DISCORD_WEBHOOK_URL, {
      content: `:taco: :taco: :taco: ${username} just starred ${repoName}! :rocket: :muscle: :tada: :taco:`,
      embeds: [
        {
          image: {
            url: avatarUrl,
          },
        },
      ],
    });
    console.log("Submitted!");
    */
    return {
      statusCode: 204,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
