import * as openWeatherMap from './openWeatherMap';
import * as Discord from './discord';

declare let global: { [key: string]: Function };

/**
 * 天気情報とアイコン画像の辞書。
 */
const weatherIconUrl: { [index in openWeatherMap.WeatherIcon]: string } = {
  '01d':
    'http://openweathermap.org/img/wn/01d@2x.png',
  '03d':
    'http://openweathermap.org/img/wn/03d@2x.png',
  '09d':
    'http://openweathermap.org/img/wn/09d@2x.png',
  '11d':
    'http://openweathermap.org/img/wn/11d@2x.png',
  '13d':
    'http://openweathermap.org/img/wn/13d@2x.png',
  '50d':
    'http://openweathermap.org/img/wn/50d@2x.png'
};

/**
 * APIから得た情報を元に任意のデータだけ使用し、JSONデータへ。
 * @param numberOfDays 今日を基準に得たい日にちのインデックス(0オリジン)
 * @param forecast 天気APIから得たデータ全て
 * @return APIレスポンスを加工したJSONデータ
 */
function GenerateDiscordPayload(
  numberOfDays: number,
  forecast: openWeatherMap.OpenWeatherMapApiRes,
): Discord.DiscordWebhookPayload {
  const daily = forecast.daily[numberOfDays];
  const date = new Date(daily.dt * 1000);
  const weather = daily.weather[0];

  return {
    // eslint-disable-next-line @typescript-eslint/camelcase
    avatar_url: weatherIconUrl[weather.icon],
    // content: "jajajajajajajajjaj",
    embeds: [
      {
        title: `${date.getMonth() + 1}月${date.getDate()}日の天気`,
        description: `**${weather.description}です。**`,
        // url: 'fafaf', ここここおおおおおお
        url: `https://openweathermap.org/api/one-call-api#current`,
        // image: `${weatherIconUrl[weather.icon]}`,
        fields: [
          {
            name: '最高気温',
            value: `${daily.temp.max}℃`,
            inline: true,
          },
          {
            name: '最低気温',
            value: `${daily.temp.min}℃`,
            inline: true,
          },
          {
            name: '湿度',
            value: `${Math.round(daily.humidity * 100)}% `,
            inline: true,
          },
          {
            name: '降水確率',
            value: `${Math.round(daily.pop * 100)}% `,
            inline: true,
          },
        ]
      }
    ]
  };
}

global.PostToDayWeatherToDiscord = (): void => {
  const forecast = openWeatherMap.GetWeatherForecastToOpenWeatherMapApi(36.366503, 140.470997);
  const payload = GenerateDiscordPayload(0, forecast);
  Discord.PostToDiscord(payload);
};

// global.PostNextDayWeatherToDiscord = (): void => {
//   const forecast = openWeatherMap.GetWeatherForecastToOpenWeatherMapApi(36.366503, 140.470997);
//   const payload = GenerateDiscordPayload(1, forecast);
//   Discord.PostToDiscord(payload);
// };
