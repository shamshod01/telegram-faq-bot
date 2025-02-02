# TELEGRAM FAQ BOT

## Main Features
- Multilanguage FAQ bot for Telegram

<img src="https://github.com/user-attachments/assets/b13f0042-95aa-4b52-a79d-19f8d2346fd9" width="350px"/>
<img src="https://github.com/user-attachments/assets/b4a01984-556a-46cd-9275-1d0d17316c80" height="600px"/>
<img src="https://github.com/user-attachments/assets/d9ed7471-7c60-4b5b-9693-fc4f6ececfcb" height="600px"/>
<img src="https://github.com/user-attachments/assets/0369e189-a013-4455-9eda-66a251fe8449" height="600px"/>
<img src="https://github.com/user-attachments/assets/756417eb-4e7e-4c17-998f-18dd5f297205" height="600px"/>


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
