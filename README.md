# yandex.chat

## npm
npm run start

## Docker
* docker build -t num213/yandex-chat .
* docker run -e HOST="0.0.0.0" -p 49160:8080 -d --name yandex_chat num213/yandex-chat