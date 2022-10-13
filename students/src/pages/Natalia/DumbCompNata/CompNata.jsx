import {React,useState} from "react";
import OneBtn from "./BtnOne";
import styles from "../../Natalia/DumbCompNata/CompNata.module.scss";
import TwoBtn from "./BtnTwo";


const NataComp = () => {
    const [hex,setHex] = useState("#Box");
    // const handleOneBtn = () => {
    //     setHex(false)
    // }

    return(
        <>
            <div className={styles.box} style={{backgroundColor: hex}}></div>
            <OneBtn
                setHex={setHex}
           />
            <TwoBtn
                handelClick= { () => hex === "red" ? setHex("purple") :setHex("orange") }
            />
        </>
    )
}

export default NataComp;
