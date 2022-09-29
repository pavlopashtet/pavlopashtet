import React from "react";
import styles from "./VitDumb.scss"
import {ButtonOne} from "./VitButtons";
import {ButtonTwo} from "./VitButtons";

const VitDumbComponent = () => {

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.squareContainer}>
                </div>
                <ButtonOne
                    colOnClick={'colorChange'}
                />
                <ButtonTwo
                />
            </div>
        </>
    )
};

export default VitDumbComponent