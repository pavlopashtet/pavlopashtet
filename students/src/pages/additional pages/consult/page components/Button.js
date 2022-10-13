import styles from "../Consult.module.scss";
const btnStyle = {
    height: "40px",
    width: "160px",
    borderRadius: "5px",
    margin: "10px",
}
const Button = ({title, nameOfClass, handleClick}) => {
    return(
        <button
            // className={`${nameOfClass} ${styles.btn}`}
            className={nameOfClass}
            style={btnStyle}
            onClick={handleClick}
        >
            Click me to {title}
        </button>
    )
}
export default  Button;