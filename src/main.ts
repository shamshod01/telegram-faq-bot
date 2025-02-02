import {TELEGRAM_BOT_TOKEN} from "./config";
import TelegramBot from "node-telegram-bot-api";
import {BotMenu} from "./bot.opts";
import {welcomeScreenHandler} from "./screen/welcome.screen";
import {callbackQueryHandler} from "./controller/callback.handler";

const token = TELEGRAM_BOT_TOKEN

if(!token) {
    throw new Error("TELEGRAM_BOT_TOKEN is not defined in the environment variables")
}

const startFAQBot = () => {
    const bot = new TelegramBot(token, {polling: true});
    bot.setMyCommands(BotMenu);

    bot.on("callback_query", async function onCallbackQuery(callbackQuery: TelegramBot.CallbackQuery) {
        callbackQueryHandler(bot, callbackQuery);
    });
    bot.on("sticker", (msg: TelegramBot.Message) => {
        console.log("sticker", msg);
    });
    // bot ignores all messages except for the ones that start with "/start"
    bot.onText(/\/start/, async (msg: TelegramBot.Message) => {
        bot.deleteMessage(msg.chat.id, msg.message_id);
        await welcomeScreenHandler(bot, msg);
    });
}

export default startFAQBot;