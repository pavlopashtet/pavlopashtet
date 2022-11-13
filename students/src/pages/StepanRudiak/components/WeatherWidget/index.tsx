import React, {useEffect, useState} from 'react';
import axios from "axios";
//@ts-ignore
import s from './WeaterWidgetStyle.module.sass';

const param = {
  "url" : "https://api.openweathermap.org/data/2.5/",
  "appid" : "fd85180c75c408f6a4c3e7af5f79ba6a"
}
interface tWeatherState {
  name: string
  main: {
    temp: number
    pressure: number
    humidity: number
  }
  weather: [{
    icon: string
    description: string
  }],
  wind: {
    speed: number
  }
}
const WeatherWidget:React.FC = () => {
  const [weatherSt, setWeatherSt] = useState<tWeatherState>({
    name: '',
    main: {
      temp: 0,
      pressure: 0,
      humidity: 0
    },
    weather: [{
      icon: '',
      description: ''
    }],
    wind: {
      speed: 0
    }
  });

  useEffect(() => {
    const cityId = '702550';
    axios.get(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
      .then(resp => {
        setWeatherSt(resp.data)
      })
  }, [])


  return (
    <div className={s.widgetContainer}>
      {weatherSt.name && (
        <div className={s.weatherWidget}>
          <p>{weatherSt.name}</p>
          <p>{Math.round(weatherSt.main["temp"]) + '\u00B0'}</p>
          <p>{weatherSt.weather[0].description}</p>
          <div>
            <img src={`http://openweathermap.org/img/wn/${weatherSt.weather[0].icon}.png`} alt="image"/>
          </div>
          <div>
            {`Wind: ${weatherSt.wind.speed} m/s`}
          </div>
          <div>
            {`Pressure: ${weatherSt.main.pressure} hPa`}
          </div>
          <div>
            {`Humidity: ${weatherSt.main.humidity} %`}
          </div>
        </div>
      )}

    </div>
  );
};

export default WeatherWidget;