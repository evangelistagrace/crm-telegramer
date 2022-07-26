const axios = require("axios").default;
const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env.TELEGRAM_BOT_TOKEN);

const url = 'https://api.telegram.org/bot';
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    let {case_id, case_title, case_category, case_type, case_type_detail} = JSON.parse(event.body)

    const res = await axios.post(`${url}${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,{
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: `[NEW CASE]\nCase#${case_id}: ${case_title}\nType: ${case_type}\nCategory: ${case_category} [${case_type_detail}]`

    }).then((response) => {
      let date = new Date()
        console.log("process executed at ", date) 
    })
    return {
      statusCode: 204,
      body: JSON.stringify({ message: "OK" }),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
