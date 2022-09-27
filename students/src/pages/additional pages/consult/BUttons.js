import styles from "./Consult.module.scss"
import { useEffect, useState } from "react";
import Button from "./page components/Button";

const Buttons = ({showInfo, setShowInfo}) => {
    useEffect(()=>{
        console.log("Buttons")
    })
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleHideInfo = () => {
        setShowInfo(false)
    }
    useEffect(()=>{
        // console.log("here")
        {inputValue.length ===4 && inputValue === "0000" && count === 5 && setScript(true)}

    },[inputValue, count])
    return (
        <>
            <h2
                onClick={()=>setCount(count+1)}
                // onClick={()=>setCount((prevState)=> prevState+1)}
            >{count}</h2>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <Button
                nameOfClass={styles.addBtn}
                title="Show"
                handleClick={()=>setShowInfo(true)}
            />
            <Button
                nameOfClass={styles.deleteBtn}
                title="Hide"
                handleClick={handleHideInfo}
            />
            <Button
                nameOfClass={showInfo ? styles.deleteBtn : styles.addBtn}
                title={showInfo ? "Hide" : "Show"}
                handleClick={()=>setShowInfo((prevState)=>!prevState)}
            />
        </>

    )
}
export default Buttons;