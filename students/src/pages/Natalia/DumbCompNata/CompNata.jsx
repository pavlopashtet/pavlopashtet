import React, {useState} from "react";
import styles from "../../Natalia/DumbCompNata/CompNata.module.scss";
import BtnOne from "./BtnOne";
import BtnTwo from "./BtnTwo";




const NataComp = () => {
    const [hex,setHex] = useState("#Box");
    const handleOneBtn = () => {
        setHex(false)
    }

    return(
        <>
            <div className={styles.box} style={{backgroundColor: hex}}></div>
            <BtnOne
                setHex={setHex}
           />
            <BtnTwo
                // setHex={setHex}
                // hex = {hex}
                handelClick= { () => hex === "red" ? setHex("purple") :setHex("orange") }
            />
        </>
    )
}

export default NataComp;





