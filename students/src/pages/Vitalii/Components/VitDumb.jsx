import React from "react";
import styles from "./VitDumb.scss"
import {ButtonOne, ButtonTwo} from "./VitButtons";

const { useState } = React;

const VitComponent = () => {

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

export default VitComponent