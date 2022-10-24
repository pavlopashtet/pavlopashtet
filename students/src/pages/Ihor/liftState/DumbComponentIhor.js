import React from "react";
import {useState} from "react";
import DumbComp1 from "./DumbComp1";
import DumbComp2 from "./DumbComp2";
import styles from "./DumbComp.module.css"


const IhorContainerPage = () => {
    const [color, setColor] = useState('orange')
    const randomizedColor=()=>{
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
        setColor(randomColor)
    }
    return (
        <div className={styles.container}>
            <div className={styles.box} style={{backgroundColor: `${color}`}}></div>
            <DumbComp1
                fTitle='Component 1'
                fOnClick={randomizedColor}

            />
            <DumbComp2
                fTitle='Component 2'
                fOnClick={randomizedColor}
            />

        </div>
    )

}

export default IhorContainerPage;



