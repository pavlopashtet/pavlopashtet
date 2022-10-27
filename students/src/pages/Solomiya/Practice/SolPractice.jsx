import React from "react";
import styles from "./SolsPractice.module.scss";
import Button from "./Button";
import InfoComponent from "./Info";
import {useState} from "react";


const MyPractice = () => {
    const [showInfo, setShownInfo] = useState( false)
    return (
        <>
            <h1>Consult</h1>
            <Button
                nameOfClass={styles.addBtn}
                title="Add"/>
            <Button
                nameOfClass={styles.deleteBtn}
                title="Delete"/>
            {/*{showInfo && <InfoComponent />}*/}
        </>

    )
}

export default MyPractice