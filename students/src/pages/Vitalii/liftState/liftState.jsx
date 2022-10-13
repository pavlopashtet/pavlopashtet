import {React,useState} from "react";
import styles from "./liftState.module.css";
import Button from "./DumbComponent/Button";

function Color() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const State = () => {
    const [background, setBackground] = useState("red");
    return (
        <div className={styles.container}>
            <div className={styles.first} style={{ backgroundColor: background }}>
            </div>
            <Button setBackground={setBackground} Color={Color()}></Button>
            <Button setBackground={setBackground} Color={Color()}></Button>

        </div>
    );
};
export default State;