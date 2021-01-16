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

## 使用方法
claspのプロジェクトの作り方、環境変数の埋め込みとか詳しくは[この辺に書いてるよ](https://github.com/uewolf25/confirm_form#%E6%BA%96%E5%82%99)  
今回はDiscordのWebhookとお天気のAPIを使うので、TOKENとAPIキーを取れればおk。  
プロパティにセットする変数は `WEBHOOK`, `SECRETKEY`としている。

## 戒め
URLは有効なURLを書こう。コード400より、Fetch出来ません。

## Todo
- トリガーの設定:[issue1](https://github.com/uewolf25/discord-bot_weathering_with_u/issues/1)
- １都市しかまだ設定してないから他も:[issue2](https://github.com/uewolf25/discord-bot_weathering_with_u/issues/2)
- アバターを埋め込みの中へ[ここ](https://github.com/uewolf25/discord-bot_weathering_with_u/blob/96856c9e084aa41b66abb72c20c38c3b9d70a7f7/src/index.ts#L47):[issu3](https://github.com/uewolf25/discord-bot_weathering_with_u/issues/3)

## API
APIはOpen Weather Mapを使用する。
天気予報の精度が紹介されているWebサイト(URL忘れた)から[Dark Sky API](https://darksky.net/dev)というサービスがあったが、Appleに買収されてからAPIキーが発行できないand登録できなくなっている。  
いろいろ調べていると、[Open Weather Map](https://openweathermap.org/)にたどり着いた。このページでは、簡単にDark Skyから移行できると書いている。確かにレスポンスの形式が似ていた。   
  
- [APIコールの詳細](https://openweathermap.org/api/one-call-api#current)
- [天気の画像拝借先](https://openweathermap.org/weather-conditions)

## 参考
TypescriptのAPIからのレスポンス入れる用のインタフェースを使うのに、JSONから自動で生成してくれる[ツール](http://json2ts.com/)があったのでとっても楽ちん。
[インデックスシグネチャ](https://typescript-jp.gitbook.io/deep-dive/type-system/index-signatures)

