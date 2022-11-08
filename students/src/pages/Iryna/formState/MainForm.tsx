//@ts-ignore
import styles from "../formState/formState.module.css";
//@ts-ignore
import { React, useState } from "react";
import FormState from "./formState";

export interface Pa {
  text:string
}
const MainForm = () => {
  const [formValue, setFormValue] = useState<Pa>({ text: "" });
  const [edit, setEdit] = useState<boolean>(false);
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
