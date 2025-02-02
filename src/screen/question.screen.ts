import * as TelegramBot from "node-telegram-bot-api";
import {FAQRepository} from "../repository";
import {
    ButtonBack, ButtonNext,
    ButtonPrevious,
    withCloseButton,
} from "../bot.opts";

export const questionScreenHandler = async (
    bot: TelegramBot,
    msg: TelegramBot.Message,
    categoryIdx: string,
    offset: number
) => {
    try {
        const {id: chat_id} = msg.chat;
        offset = Number(offset);
        const questions = await FAQRepository.getByCategoryIdx(categoryIdx, offset, 4);
        if(questions.length === 0) return;
        const caption = questions.map((question, index) => {
            return `${Number(index) + offset + 1}. ${question.question}\n`
        });

        caption.unshift(`<b>${offset+1}-${offset+4}</b>\n`);

        // Create button objects for each language
        const buttons = questions.map((question, index) => ({
            text: index + offset + 1,
            callback_data: JSON.stringify({
                    command: `q_${question.idx}`
                }
            )
        }));

        // Group the buttons into rows with two buttons per row
        let keyboard = buttons.reduce((rows: any, button, index) => {
            if (index % 4 === 0) {
                // Start a new row for even-indexed buttons
                rows.push([button]);
            } else {
                // Add the button to the last row for odd-indexed buttons
                rows[rows.length - 1].push(button);
            }
            return rows;
        }, []);

        keyboard.push([
            {
                text: ButtonBack,
                callback_data: JSON.stringify({
                    command: "lang_" + questions[0].language,
                }),
            },

                {
                    text: ButtonNext,
                    callback_data: JSON.stringify({
                        command: `pg_${offset + 4}_${categoryIdx}`,
                    }),
                },

        ])
        if (offset > 0) {
            keyboard[keyboard.length - 1].unshift(
                {
                    text: ButtonPrevious,
                    callback_data: JSON.stringify({
                        command: `pg_${offset - 4}_${categoryIdx}`,
                    }),
                },
            );
        }

        if (offset == 0) {
            // it's because previous msg might be a sticker
          //  bot.deleteMessage(chat_id, msg.message_id);
            return await bot.sendMessage(chat_id, caption.join(''), {
                parse_mode: "HTML",
                disable_web_page_preview: true,
                reply_markup: {
                    inline_keyboard: withCloseButton(keyboard)
                },
            });
        }
        await bot.editMessageText(caption.join(''), {
            message_id: msg.message_id,
            chat_id,
            parse_mode: "HTML",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: withCloseButton(keyboard)
            },
        });
    } catch (error) {
        console.log("-QuestionScreenHandler-", error);
    }
}