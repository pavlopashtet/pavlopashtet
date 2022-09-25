import Component from "./liftStateComponent/Component";
import Component2 from "./liftStateComponent/Component2";
import styles from "./liftState.module.css";
import { React, useState } from "react";

function Color() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const MainComponent = () => {
  const [bg, setBg] = useState("deeppink");
  return (
    <div className={styles.container}>
      <div className={styles.box} style={{ backgroundColor: bg }}></div>
      <Component setBg={setBg} Color={Color()} />
      <Component2 setBg={setBg} Color={Color()} />
    </div>
  );
};
export default MainComponent;
