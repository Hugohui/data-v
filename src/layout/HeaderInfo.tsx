import { color } from "echarts";
import { getWeatherInfo } from "../api/headerInfo";
import { HeaderInfoStyle } from "./HeaderInfoStyle"
import { useState, useEffect } from 'react';

interface WeatherI {
    text: string; // 天气状况的文字描述，包括阴晴雨雪等天气状态的描述
    icon: string; // 天气状况的图标代码
    temp: string; // 温度，默认单位：摄氏度
}


export const HeaderInfo = () => {
    const [dateInfo, setDateInfo] = useState({
        date: new Date(),
        dayOfWeek: '',
    });
    const [weather, setWeather] = useState<WeatherI>({text: '', icon: '', temp: ''})

    useEffect(() => {
        console.log("====getWeatherInfo====")
        const updateDateInfo = () => {
            const now = new Date();
            const dayOfWeek = ['日', '一', '二', '三', '四', '五', '六'][now.getDay()];
            setDateInfo({ date: now, dayOfWeek: `星期${dayOfWeek}` });
        };
        const intervalId = setInterval(updateDateInfo, 1000);

        getWeatherInfo().then((res: any) => {
            if (res.code === '200') {
                console.log("getWeatherInfo=====", res.now)
                setWeather(res.now)
            }
        })
        return () => clearInterval(intervalId);
    }, []);

    const { date, dayOfWeek } = dateInfo;
    const formatTime = (num: number) => num < 10 ? `0${num}` : num;
    const hours = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    const time = `${hours}:${minutes}:${seconds}`;

    return (
        <HeaderInfoStyle>
            <div className="weather">
                <span className={['icon', `qi-${weather.icon}`].join(' ')}></span>
                <span className="status">{weather.text}</span>
                {
                    weather.temp ? <span>{weather.temp}°C</span> : ''
                }
            </div>
            <div className="time">
                <span className="icon"></span>
                <span className="timeNow">{date.getFullYear()}年{date.getMonth() + 1}月{date.getDate()}日 {dayOfWeek} {time}</span>
            </div>
        </HeaderInfoStyle>
    )
}