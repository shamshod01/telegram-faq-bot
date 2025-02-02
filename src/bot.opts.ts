export const WelcomeScreenSticker = 'CAACAgQAAxkBAAIEZmee2TxL67l1oFpj0OY13hqFHwZ3AAJnGQACihApUdDY_mq5-ZnNNgQ'
export const CategoryScreenSticker = 'CAACAgQAAxkBAAIEaWee2YWhsFTHQjXxve-lW_nk3gVgAAL6FgACHksxUeEb5nqxmPPlNgQ'

export const ButtonClose = '❌';
export const ButtonBack = '🔙';
export const ButtonNext = '➡️';
export const ButtonPrevious = '⬅️';

export const BotMenu = [
    { command: 'start', description: 'Welcome' }
];

export const withCloseButton = (keyboard: any) => {
    keyboard.push([{ text: ButtonClose, callback_data: JSON.stringify({ command: 'close' }) }]);
    return keyboard;
}
