import { get } from "../http";

export const getWeatherInfo = () => {
    const url = "https://devapi.qweather.com/v7/weather/now?location=101110501&key=6d061a871f564b9e8f707f0ef9253b23"
    return get(url)
}