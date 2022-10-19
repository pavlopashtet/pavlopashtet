import { useState } from "react"
import s from "./Message.module.scss"
export const Message = ({ el, remove }) => {
    const [count, setCount] = useState(0)

    const getDataComent = (date) => {
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