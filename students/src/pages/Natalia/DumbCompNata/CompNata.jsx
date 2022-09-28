import React from "react";
import OneBtn from "./OneBtn";
import styles from "../../Natalia/DumbCompNata/CompNata.module.scss";
import TwoBtn from "./Two.Btn";


const NataComp = () => {
     return(
         <>
         <div className={styles.box}><h1>BOX</h1></div>
             <OneBtn/>

             <TwoBtn />
</>
     )
         }



export default NataComp;