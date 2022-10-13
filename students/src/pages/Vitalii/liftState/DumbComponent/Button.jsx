import styles from "../liftState.module.css";

const Button = ({ setBackground, Color}) => {
    return (
        <button className={styles.button} onClick={()=>{setBackground(Color)}}>
            BUTTON
        </button>
    );
};
export default Button;