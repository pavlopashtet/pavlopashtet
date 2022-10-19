import styles from "../formState/formState.module.css";
import { React, useState } from "react";
import FormState from "./formState";


const MainForm = () => {
  const [formValue, setFormValue] = useState({ text: "" });
  const [edit, setEdit] = useState(false);
  return (
    <div className={styles.container}>
      {edit ? (
        <div className={styles.box}>{formValue.text}</div>
      ) : ("")}
      <FormState formValue={formValue} setFormValue={setFormValue} edit = {edit} setEdit = {setEdit}/>
    </div>
  );
};
export default MainForm;
