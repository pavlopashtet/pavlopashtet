import {React, useState } from "react";
import styles from "../sashaForms/SashaForms.module.css";
import FormContainer from "../sashaForms/SashaForms";

const FormsParent = () => {
  const [formValue, setFormValue] = useState({ text: "" });
  const [edit, setEdit] = useState(false);
  return (
    <div className={styles.container}>
      <FormContainer formValue={formValue} setFormValue={setFormValue} edit = {edit} setEdit = {setEdit}/>
      {edit ? (
        <div className={styles.smallContainer}>{formValue.text}</div>
      ) : ("")}
      
    </div>
  );
};
export default FormsParent;