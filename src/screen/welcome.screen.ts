import * as TelegramBot from "node-telegram-bot-api";
import {LanguageRepository} from "../repository";
import {WelcomeScreenSticker} from "../bot.opts";

export const welcomeScreenHandler = async (
    bot: TelegramBot,
    msg: TelegramBot.Message
) => {
    try {
        const {id: chat_id} = msg.chat;

        const languages = await LanguageRepository.getLanguages();

        // Create button objects for each language
        const buttons = languages.map(language => ({
            text: language.flag,
            callback_data: JSON.stringify({
                    command: `lang_${language.code}`
                }
            )
        }));

        // Group the buttons into rows with two buttons per row
        const keyboard = buttons.reduce((rows: any, button, index) => {
            if (index % 2 === 0) {
                // Start a new row for even-indexed buttons
                rows.push([button]);
            } else {
                // Add the button to the last row for odd-indexed buttons
                rows[rows.length - 1].push(button);
            }
            return rows;
        }, []);
        await bot.sendSticker(chat_id, WelcomeScreenSticker, {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        console.log("-WelcomeScreenHandler-", error);
    }
}