import React from "react";
import styles from "../../Natalia/DumbCompNata/CompNata.module.scss";


const OneBtn = ({title,color,handleClick}) => {
    return(
        <button
            className={styles.btn}
        >
            One
        </button>

    )
}

export default OneBtn;