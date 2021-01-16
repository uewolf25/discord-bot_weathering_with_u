/**
 * 天気画像ごとのタイプ分け。
 * - 01d: 晴れ
 * - 03d: 曇り
 * - 09d: 雨
 * - 11d: 雷
 * - 13d: 雪
 * - 50d: 霧などその他の気象
 * 画像データは[weather-conditionsより](https://openweathermap.org/weather-conditions)
 */
export type WeatherIcon =
  | '01d'
  | '03d'
  | '09d'
  | '11d'
  | '13d'
  | '50d';

/**
 * APIレスポンスの温度に関する部分のインタフェース。
 */
interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

/**
 * APIレスポンスの体感温度に関する部分のインタフェース。
 */
interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

/**
 * APIレスポンスの天気情報に関する部分のインタフェース。
 */
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: WeatherIcon;
}

/**
 * APIレスポンスの１週間の天気に関する部分のインタフェース。
 */
interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  uvi: number;
  rain?: number;
}

/**
 * JSONレスポンスのメインの部分。上位のインタフェースの集約部分。
 */
export interface OpenWeatherMapApiRes{
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: Daily[];
}

/**
 * 特定の場所の位置情報を元に、天気APIからのレスポンスを返す。
 * @param latitude 緯度
 * @param longitude 経度
 * @return reponse APIのレスポンス
 */
export function GetWeatherForecastToOpenWeatherMapApi(
  latitude: number,
  longitude: number,
): OpenWeatherMapApiRes {
  const key = PropertiesService.getScriptProperties().getProperty('SECRETKEY');
  const exclude = ['currently', 'minutely', 'hourly', 'flags'].join(',');
  const lang = 'ja';
  const units = 'metric';
  const apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${exclude}&units=${units}&lang=${lang}&appid=${key}`
  
  const errors: Error[] = [];
  for (let i = 0; i < 3; i++) {
    try {
      const responseJson = UrlFetchApp.fetch(apiurl).getContentText('UTF-8');
      const response: OpenWeatherMapApiRes = JSON.parse(responseJson);
      return response;

    } catch (error) {
      errors.push(error);
      Logger.log(JSON.stringify(error));
    }
  }
  throw errors;
}
