import styles from "./CompNata.module.scss";

const BtnTwo= ({nameofClass}) =>{
    return (
        <button
            className={nameofClass}
            className={styles.btn}
            // onClick={handelClick}

  >
            Two
        </button>
    )
}
export default BtnTwo