# discord-bot_weathering_with_u
森菜々だよ！！！  
天気予報Bot  
1/16 卒論提出6日前間に合うかチャレンジ  
ああああああああああああああああああああああああああああああああああああああああ

## 環境&tool
- lang
  - Typescript:3.8.3
    - eslint:6.8.0
  - GAS
- tools
  - npm:7.0.15
  - node:v15.4.0
  - clasp:2.3.0
  - webpack:4.42.1
- test
  - jest:25.2.4

## 戒め
URLは有効なURLを書こう。コード400より、Fetch出来ません。

## Todo
- トリガーの設定
- １都市しかまだ設定してないから他も
- アバターを埋め込みの中へ

## API
APIはOpen Weather Mapを使用する。
天気予報の精度が紹介されているWebサイト(URL忘れた)から[Dark Sky API](https://darksky.net/dev)というサービスがあったが、Appleに買収されてからAPIキーが発行できないand登録できなくなっている。  
いろいろ調べていると、[Open Weather Map](https://openweathermap.org/)にたどり着いた。このページでは、簡単にDark Skyから移行できると書いている。確かにレスポンスの形式が似ていた。   
  
- [APIコールの詳細](https://openweathermap.org/api/one-call-api#current)
- [天気の画像拝借先](https://openweathermap.org/weather-conditions)

