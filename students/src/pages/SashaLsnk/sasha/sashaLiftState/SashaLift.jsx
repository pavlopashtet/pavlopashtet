import React from "react";
import styles from "../sashaLiftState/SashaLift.module.css";
import Lift1 from "./Lift1";
import Lift2 from "./Lift2"
import { useState } from "react";
import LiftParent from "./LiftParent";


const SashaLift = () => {
    console.log("lift") 
    return (
    
        <LiftParent/>
    )
}

export default SashaLift;