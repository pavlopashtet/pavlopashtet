import React from "react";
import styles from "../sashaInputs/sashaInputs.module.css"


const InputsPreview = ({Name, Surname, Age, Role, Job}) => {
    console.log("inputs preview")
        return(
            <div className={styles.previewContainer}>
                <h5>{Name}</h5>
                <h5>{Surname}</h5>
                <h5>{Age}</h5>
                <h5>{Role}</h5>
                <h5>{Job}</h5>
            </div>
        )
    };
    
    export default InputsPreview;