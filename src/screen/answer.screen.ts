import * as TelegramBot from "node-telegram-bot-api";
import {FAQRepository} from "../repository";
import {withCloseButton} from "../bot.opts";

export const answerScreenHandler = async (
    bot: TelegramBot,
    msg: TelegramBot.Message,
    questionIdx: number
) => {
    try {
        const {id: chat_id} = msg.chat;

        const faq = await FAQRepository.getOne(questionIdx);

        let caption = "No answer found";
        if(faq) {
            caption = `<b>${faq.question}</b>\n\n${faq.answer}`;
        }
        await bot.sendMessage(chat_id, caption, {
            parse_mode: "HTML",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: withCloseButton([])
            },
        });
    } catch (error) {
        console.log("-AnswerScreenHandler-", error);
    }
}