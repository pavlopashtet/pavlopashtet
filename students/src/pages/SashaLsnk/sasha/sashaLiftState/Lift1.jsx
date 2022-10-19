import React, { useState } from "react";
import styles from "../sashaLiftState/SashaLift.module.css";

const SashaLift1 = ({ fOnClick, fColor }) => {
  console.log("lift1");
  return (
    <div>
      <button className={styles.btn} onClick={() => fOnClick(fColor)}>
        Change
      </button>
    </div>
  );
};

export default SashaLift1;
