import React from "react";
import OneBtn from "./BtnOne";
import styles from "../../Natalia/DumbCompNata/CompNata.module.scss";
import TwoBtn from "./BtnTwo";
import { useState } from "react";


const NataComp = () => {
    const [hex,setHex] = useState("#Box");
    const handleOneBtn = () => {
        setHex(false)
    }

    return(
        <>
            <div className={styles.box} style={{backgroundColor: hex}}></div>
            <OneBtn
                setHex={setHex}
           />
            <TwoBtn
                // setHex={setHex}
                // hex = {hex}
                handelClick= { () => hex === "red" ? setHex("purple") :setHex("orange") }
            />
        </>
    )
}

export default NataComp;





// const NataComp = () => {
//     // const [color,setColor] = useState('#000');
//     // const [bgr, setBgr] = useState('#000')
//
//     // const handelClick = () => {
//     //     const color = {
//     //         r: getRgb(),
//     //         g: getRgb(),
//     //         b: getRgb()
//     //
//     //     };
//     //     setColor(rgbToHex(color.r,color.g,color.b,))
//
//      return(
//          <>
//          <div className={styles.box}><h1>BOX</h1></div>
//              <OneBtn
//                  // setBgr = {(setBgr)}
//              />
//              <TwoBtn />
// </>
//      )
//          }
//
//
//
// export default NataComp;