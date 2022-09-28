import React from "react";
import styles from "../../Natalia/DumbCompNata/CompNata.module.scss";
const TwoBtn = ({title,color,handleclick}) => {
    return(
        <button
            className={styles.btn}
        onClick={{handleclick}}
        >{title}
           Two
        </button>

    )
}

export default TwoBtn;