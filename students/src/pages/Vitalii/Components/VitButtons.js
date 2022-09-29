import React from "react";
import styles from "./VitDumb.scss"

const ButtonOne = (colorClick) => {
    return (
        <div className={styles.wrapper}>
            <button
                className={styles.button}
                onClick={()=>colorClick()}>
                Color 1
            </button>
        </div>
    )
}
export const ButtonTwo = (colorClick) => {
    return (
        <div className={styles.wrapper}>
            <button
                className={styles.button}
                onClick={()=>colorClick()}>
                Color 2
            </button>
        </div>
    )
}

export default ButtonOne
