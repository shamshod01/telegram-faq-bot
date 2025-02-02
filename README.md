# TELEGRAM FAQ BOT

## Main Features
- Multilanguage FAQ bot for Telegram

## Tech stack
- Typescript
- Telegram API
- MongoDB

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed (v18 or above recommended)
- Telegram bot token from bot father
- MongoDB Cluster URI

## Configurations

1. Star the repository :)
2. Clone it:
```shell
git clone https://github.com/shamshod01/telegram-faq-bot.git
```
3. Go to the project directory:
```shell
cd telegram-faq-bot
```
4. Install the dependencies:
```sh
npm install
```
5. Create a new `.env` file and add your Private key, Rpc URL

`.env` file
```sh
MONGODB_URL=
TELEGRAM_BOT_TOKEN=
```
6. Then run the bot
```sh
npm run serve
```

## Adding FAQ and categories
1. Update a `src/db/*.json` files with your FAQ
2. In `server.ts` uncomment `//initDB()` to load data to MongoDB!
