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
    const [city, setCity] = useState('lviv')
    const [searchCity, setSearchCity] = useState('')
    const [shoveMore, setShowMore] = useState(false)
    const [isLoading, setLoading] = useState()

    const getWeather = (url = "lviv") => {
        return instance2.get(url)
    }
    const getSearch = () => {
        setCity(searchCity)
        setSearchCity('')
        setShowMore(false)
    }

    // useEffect(() => {
    //     console.log("render");
    //    getWeather()
    //         .then((response) => {
    //             console.log(response.data);
    //             setItem(response.data)

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })

    // }, [])
    useEffect(() => {
        console.log("render2");
        setLoading(true)
        getWeather(city)
            .then((response) => {
                console.log(response.data);
                setItem(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false))
    }, [city])

    return (
        <div className={s.weather}>
            <input type="text" value={searchCity} onChange={(e) => setSearchCity(e.target.value)} placeholder='Choose city...' />
            <button onClick={getSearch}>Show the weather</button>
            <div className={s.description}>
                {isLoading && <h4>Loading ... </h4>}
                {!isLoading && <>
                    <h5>{item.region}</h5>
                    <h6>{item.currentConditions?.dayhour}</h6>
                    <img width={'80px'} src={item.currentConditions?.iconURL} alt='icon' />
                    <p>{item.currentConditions?.comment}</p>
                    <p className={s.temp}>{item.currentConditions?.temp.c}ºC</p>
                    <p>humidity: {item.currentConditions?.humidity}</p>
                    <p>precip: {item.currentConditions?.precip}</p>
                    <p>wind: {(item.currentConditions?.wind.km / 3, 6).toFixed(1)} m/s</p>
                </>}
            </div>
            <button onClick={() => setShowMore(prev => !prev)}>
                {shoveMore ? 'Hide forecast' : "See for a week"}
            </button>
            <div className={s.weather_cards}>
                {shoveMore && item.next_days?.filter((el, i) => i > 0)
                    .map((element, i) => <WeatherCard key={i} data={element} />)}
            </div>
        </div>
    )
}