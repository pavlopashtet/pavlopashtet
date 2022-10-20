import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { WeatherCard } from "./WeatherCard";
import s from "./AxiosComponent.module.scss"

const instance2 = axios.create({
    baseURL: "https://weatherdbi.herokuapp.com/data/weather/",
    headers: {
        "Content-Type": "application/json",
    },
});

export const AxiosComponent = () => {
    const [item, setItem] = useState({})
    const [city, setCity] = useState('')
    const [searchCity, setSearchCity] = useState('')
    const [shoveMore, setShowMore] = useState(false)

    const getWeather = (url = "lviv") => {
        return instance2.get(url)
    }
    const getSearch = () => {
        setCity(searchCity)
        setSearchCity('')
        setShowMore(false)
    }

    useEffect(() => {
        console.log("render");
       getWeather()
            .then((response) => {
                console.log(response.data);
                setItem(response.data)
                
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])
    useEffect(()=>{
        console.log("render2");
        getWeather(city)
            .then((response) => {
                console.log(response.data);
                setItem(response.data)
                console.log(item);
            })
            .catch((err) => {
                console.log(err);
            })
    },[city])

    return (
        <div className={s.weather}>
            <input type="text" value={searchCity} onChange={(e) => setSearchCity(e.target.value)} placeholder='Choose city...' />
            <button onClick={getSearch}>Show the weather</button>
            <div className={s.description}>
                <h5>{item.region}</h5>
               <h6>{item.currentConditions?.dayhour}</h6>
               <img width={'80px'} src= {item.currentConditions?.iconURL} alt='icon'/>
               <p>{item.currentConditions?.comment}</p>
               <p className={s.temp}>{item.currentConditions?.temp.c}ºC</p>
               <p>humidity: {item.currentConditions?.humidity}</p>
               <p>precip: {item.currentConditions?.precip}</p>
               <p>wind: {(item.currentConditions?.wind.km/3,6).toFixed(1)} m/s</p>
                {/* <h5>Lviv</h5>
                <h6>Wednesday</h6>
                <img width={'80px'} src='https://sinst.fwdcdn.com/img/weatherImg/m/d320.gif' alt='icon' />
                <p>Cloudy</p>
                <p className={s.temp}>12ºC</p>
                <p>humidity: 92%</p>
                <p>precip: 9%</p>
                <p>wind: 14 km/h</p> */}
            </div>
            <button onClick={()=>setShowMore(prev=>!prev)}>
            {shoveMore? 'Hide forecast' : "See for a week"}
            </button>
            <div className={s.weather_cards}>
            {shoveMore && <WeatherCard/>}
            </div>
        </div>
    )
}