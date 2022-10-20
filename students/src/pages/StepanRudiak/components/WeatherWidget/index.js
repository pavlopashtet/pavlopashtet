import React, {useEffect, useState} from 'react';
import axios from "axios";
import s from './WeaterWidgetStyle.module.sass';

const param = {
  "url" : "https://api.openweathermap.org/data/2.5/",
  "appid" : "fd85180c75c408f6a4c3e7af5f79ba6a"
}
const WeatherWidget = () => {
  const [weatherSt, setWeatherSt] = useState({});

  useEffect(() => {
    const cityId = '702550';
    axios.get(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
      .then(resp => resp.data)
      .then(resp => {
        setWeatherSt(resp)
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