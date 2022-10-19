import React from "react";
import styles from "./VitDumb.scss"

const ButtonOne = (colOnClick,colorChange) => {
    return (
        <div className={styles.wrapper}>
            <button
                className={styles.button}
                onClick={()=>colOnClick()}>
                Color 1
            </button>
        </div>
    )
}
export const ButtonTwo = (colOnClick,colorChange) => {
    return (
        <div className={styles.wrapper}>
            <button
                className={styles.button}
                onClick={()=>colOnClick()}>
                Color 2
            </button>
        </div>
    )
}

export default ButtonOne