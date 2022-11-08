import { useState } from "react"
import { Message } from "./Message";
export interface Coment{
    id:number
    text:string
}

export const InputStateComponent = () => {
    const [value, setValue] = useState<string>('');
    const [coments, setComents] = useState<Coment[]>([]);

    const addComent = ()=>{
        if(value.trim().length){
            setComents([
                ...coments,
                {
                    id:Date.now(),
                    text: value
                }
            ])
            setValue('');
        }
    }
    const removeComent = (id:number)=>{
        setComents(coments.filter(el=>el.id !== id))
    }

    return (
        <>
        <div className="inputField">
        <input style={{width:"500px"}} type="text" placeholder="Leave a review..." value={value} onChange = {e=> setValue(e.target.value)}/>
        <button onClick={addComent}>Send</button>
        </div>
        <div className="messages">
            {coments.map(el=><Message key={el.id} el = {el} remove={removeComent}/>)}
        </div>
        </>
    )
}