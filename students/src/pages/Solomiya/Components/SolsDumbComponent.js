import React from "react";
import styles from "./SolsDumbComponent.module.scss"
import ButtonOne from "./SolsButtons";
import ButtonTwo from "./SolsButtons";

const SolsDumbComponent = () => {

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

export default SolsDumbComponent