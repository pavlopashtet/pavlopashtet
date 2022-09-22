import React from "react";
import styles from "./SolsDumbComponent.module.scss"
import {ButtonOne, ButtonTwo} from "./SolsButtons";

const { useState } = React;

const SolsComponent = () => {

    const [btnColor, setBtnColor] = useState("red")

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.squareContainer} style={{backgroundColor: btnColor}}>
                </div>



                <ButtonOne
                    setBtnColor = {setBtnColor}
                />
                <ButtonTwo
                    btnColor = {btnColor}
                    setBtnColor = {setBtnColor}
                />
            </div>
        </>
    )
};

export default SolsComponent