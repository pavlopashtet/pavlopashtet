import React, { useState } from "react";
import styles from "../sashaLiftState/SashaLift.module.css";

const SashaLift2 = ({ fOnClick, fColor }) => {
  console.log("lift2");
  return (
    <div>
      <button className={styles.btn} onClick={() => fOnClick(fColor)}>
        Change Again
      </button>
    </div>
  );
};

export default SashaLift2;
