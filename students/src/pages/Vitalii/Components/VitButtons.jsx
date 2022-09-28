import React from "react";
import styles from "./VitDumb.scss"

const randomColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}


export const ButtonOne = ({setBtnColor}) => {
    return (
        <div className={styles.wrapper}>
            <button
                className={styles.button}
                onClick={() => {
                    setBtnColor(randomColor());
                }}>
                Random
            </button>
        </div>
    )
}

export const ButtonTwo = ({btnColor,setBtnColor}) => {
    return (
        <div className={styles.wrapper}>
            <button
                className={styles.button}
                onClick={() => {
                    btnColor === "yellow" ? setBtnColor("orange") : setBtnColor("yellow");
                }}>
                Color
            </button>
        </div>
    )
}