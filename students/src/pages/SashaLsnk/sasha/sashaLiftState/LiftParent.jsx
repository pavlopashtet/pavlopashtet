import React from "react";
import styles from "../sashaLiftState/SashaLift.module.css";
import Lift1 from "./Lift1";
import Lift2 from "./Lift2";
import { useState } from "react";

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const LiftParent = () => {
  const [color, setColor] = useState("pink");
  return (
    <div className={styles.biggestContainer}>
      <div className={styles.container} style={{ backgroundColor: color }}>
      </div>

      <div className={styles.buttonsContainer}>
        <Lift1 fOnClick={setColor} fColor={randomColor()} />
        <Lift2 fOnClick={setColor} fColor={randomColor()} />
      </div>
    </div>
  );
};
export default LiftParent;
