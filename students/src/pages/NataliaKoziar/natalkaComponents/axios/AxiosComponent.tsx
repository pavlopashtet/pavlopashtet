import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { WeatherCard } from "./WeatherCard";
import { NextDays, Response } from "./models"
// @ts-ignore
import s from "./AxiosComponent.module.scss"

const instance = axios.create({
    baseURL: "https://weatherdbi.herokuapp.com/data/weather/",
    headers: {
        "Content-Type": "application/json",
    },
});

export const AxiosComponent = () => {
    const [item, setItem] = useState<Response>({})
    const [city, setCity] = useState<string>('lviv')
    const [searchCity, setSearchCity] = useState<string>('')
    const [shoveMore, setShowMore] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(false)

    const getWeather = (url: string = "lviv") => {
        return instance.get<Response>(url)
    }
    const getSearch = (): void => {
        setCity(searchCity)
        setSearchCity('')
        setShowMore(false)
    }

    useEffect(() => {
        console.log("render");
        setLoading(true)
        getWeather(city)
            .then((response) => {
                setItem(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false))
    }, [city])

    return (
        <div className={s.weather}>
            <input type="text" value={searchCity} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchCity(e.target.value)} placeholder='Choose city...' />
            <button onClick={getSearch}>Show the weather</button>
            <div className={s.description}>
                {isLoading && <h4>Loading ... </h4>}
                {!isLoading && <>
                    <h5>{item.region}</h5>
                    <h6>{item.currentConditions?.dayhour}</h6>
                    <img width={'80px'} src={item.currentConditions?.iconURL} alt='icon' />
                    <p>{item.currentConditions?.comment}</p>
                    <p className={s.temp}>{item.currentConditions?.temp?.c}ºC</p>
                    <p>humidity: {item.currentConditions?.humidity}</p>
                    <p>precip: {item.currentConditions?.precip}</p>
                    <p>wind: {item.currentConditions?.wind?.km ? (item.currentConditions?.wind?.km / 3.6).toFixed(1) : ""} m/s</p>
                </>}
            </div>
            <button onClick={() => setShowMore(prev => !prev)}>
                {shoveMore ? 'Hide forecast' : "See for a week"}
            </button>
            <div className={s.weather_cards}>
                {shoveMore && item.next_days?.filter((el: NextDays, i: number) => i > 0)
                    .map((element: NextDays, i: number) => <WeatherCard key={i} data={element} />)}
            </div>
        </div>
    )
}