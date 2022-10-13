import styles from "./CompNata.module.scss";

const BtnTwo= ({nameofClass,handelClick}) =>{
    return (
        <button
            className={`${nameofClass} ${styles.btn}`}
            onClick={handelClick}

  >
            Two
        </button>
    )
}
export default BtnTwo