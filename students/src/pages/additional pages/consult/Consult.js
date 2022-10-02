import Button from "./page components/Button";
import styles from "./Consult.module.scss"
import InfoComponent from "./Info";
import { useEffect, useState } from "react";
import Buttons from "./BUttons";
const ConsultContainer = () => {
    const [showInfo, setShowInfo] = useState(false);


    const runScript = () => true;
    useEffect(()=>{
        console.log("ConsultContainer")
    })


    return (
        <>
            <h1>Consult</h1>
            <Buttons showInfo={showInfo} setShowInfo={setShowInfo}/>
            {showInfo && <InfoComponent />}
        </>

    )
}
export default ConsultContainer;