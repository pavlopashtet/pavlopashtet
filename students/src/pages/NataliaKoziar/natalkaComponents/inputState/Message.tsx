import { useState } from "react"
//@ts-ignore
import s from "./Message.module.scss"
import {Coment} from "./InputState"
interface MessageProps{
    el:Coment
    remove: (id:number)=>void
}

export const Message = ({ el, remove }:MessageProps) => {
    const [count, setCount] = useState(0)

    const getDataComent = (date:number) => {
        return new Date(date).toLocaleDateString()
    }
    const addLike = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div className={s.message}>
            <div className={s.text}>
                {el.text}
            </div>
            <div className={s.details}>
                {getDataComent(el.id)}
                <div className="likeCounter">
                    {count}
                    <button onClick={addLike}>Add like</button>
                    <button onClick={() => remove(el.id)}>Delete</button>
                </div>
            </div>

        </div>
    )
}