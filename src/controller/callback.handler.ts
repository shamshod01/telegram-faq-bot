import TelegramBot from "node-telegram-bot-api";
import {categoryScreenHandler} from "../screen/category.screen";
import {answerScreenHandler} from "../screen/answer.screen";
import {questionScreenHandler} from "../screen/question.screen";


export const callbackQueryHandler = async (
    bot: TelegramBot,
    callbackQuery: TelegramBot.CallbackQuery
) => {
    try {
        const { data: callbackData, message: callbackMessage } = callbackQuery;
        if (!callbackData || !callbackMessage) return;
        const data = JSON.parse(callbackData);
        const opts = {
            chat_id: callbackMessage.chat.id,
            message_id: callbackMessage.message_id,
        };
        if(data.command.includes('close')) {
            // close the message
            bot.deleteMessage(opts.chat_id, opts.message_id);
            return;
        }
        if(data.command.includes('lang_')) {
            // set user language and show categories
            const userLanguage = data.command.split('_')[1];
            console.log(userLanguage);
            await categoryScreenHandler(bot, callbackMessage, userLanguage);
            return;
        }
        if(data.command.includes('ct_')) {
            // show questions related to category
            const categoryIdx = data.command.split('_')[1];
             await questionScreenHandler(bot, callbackMessage, categoryIdx, 0);
        }
        if(data.command.includes('q_')) {
            // handle question, send answer
            const question = data.command.split('_')[1];
            await answerScreenHandler(bot, callbackMessage, question);
        }
        if(data.command.includes('pg_')) {
            //handle pagination
            const offset = data.command.split('_')[1];
            const categoryIdx = data.command.split('_')[2];
            await questionScreenHandler(bot, callbackMessage, categoryIdx, offset);
        }
    } catch (e) {
        console.log(e);
    }
};
