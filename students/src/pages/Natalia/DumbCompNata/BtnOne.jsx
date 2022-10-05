import styles from "./CompNata.module.scss";



const BtnOne= ({setHex}) =>{
    // const randomHex = () => {
        const randomColor = "#" +Math.floor(Math.random()*16777215).toString(16);

    return (
        <button
            className={styles.btn}
            onClick={() => setHex(randomColor)
            }
        >
            One
        </button>
    )
}

export default BtnOne