# chatgpt-whatsapp

A ChatGPT implementation into Whatsapp... However it's a bot, I'm not responsible for anything that happens in your Whatsapp account (yes I guess Whatsapp just bans any account without any fault)

## Instalation

- You need nodejs and npm installed
- clone this repo
- run `npm i` to install all package.
- fill all the configuration in `example.env`
    - `SESSION_TOKEN` is your chatgpt session token.
- rename `example.env` to `.env`
- run `node .` and scan the qr in terminal with you Whatsapp.
- use command `!chatgpt <args>` to use the bot
- enjoy

## Session Token
To get your session token:
- go to https://chat.openai.com/chat (you must login or signup first)
- Open dev tools (F12)
- Go to `Application` > `Cookies`
- You should copy the value of `__Secure-next-auth.session-token` cookies.
- Paste it in `example.env` and you must rename the file to `.env`

