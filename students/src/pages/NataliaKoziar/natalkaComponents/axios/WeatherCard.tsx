// @ts-ignore
import s from "./AxiosComponent.module.scss"
import {NextDays} from "./models"
interface WeatherCardProps{
    data:NextDays
}


export const WeatherCard = ({data}:WeatherCardProps)=>{
    return(
        <div className={s.card}>
            <h6>{data.day}</h6>
            <img src= {data.iconURL} alt='icon'/>
            <p>{data.comment}</p>
            <p>max:{data.max_temp.c}ºC,</p>
            <p>min:{data.min_temp.c}ºC</p>
        </div>
    )
}
