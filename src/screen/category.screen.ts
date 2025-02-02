import * as TelegramBot from "node-telegram-bot-api";
import {CategoryRepository, UserRepository} from "../repository";
import {CategoryScreenSticker, WelcomeScreenSticker, withCloseButton} from "../bot.opts";

export const categoryScreenHandler = async (
    bot: TelegramBot,
    msg: TelegramBot.Message,
    languageCode: string

) => {
    try {
        const {id: chat_id} = msg.chat;
        const userId = msg.from?.id;
        // I don't know when this will happen
        // may be bots don't have userId
        if (!userId) {
            await bot.sendMessage(
                chat_id,
                "⚠️ You have no telegram user id. Please take at least one and try it again."
            );
            return;
        }
        if(!languageCode) {
            languageCode = await UserRepository.getLanguage(userId.toString());
        }
        await UserRepository.saveLanguage(userId.toString(), languageCode);
        const categories = await CategoryRepository.getByLang(languageCode);
        // Create button objects for each language
        const buttons = categories.map(category => ({
            text: category.title,
            callback_data:  JSON.stringify({
                        command: `ct_${category.idx}`
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
       // bot.deleteMessage(chat_id, msg.message_id);
        await bot.sendSticker(chat_id, CategoryScreenSticker, {
            reply_markup: {
                inline_keyboard: withCloseButton(keyboard)
            }
        });
        // await bot.deleteMessage(chat_id, msg.message_id);
    } catch (error) {
        console.log("-CategoryScreenHandler-", error);
    }
}