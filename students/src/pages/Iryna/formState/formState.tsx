//@ts-ignore
import styles from "../formState/formState.module.css";
//@ts-ignore
import { React, useState } from "react";
import { Pa } from "./MainForm";

const FormState = ({ setFormValue, setEdit}:any) => {
  const [inputValue, setInputValue] = useState<Pa>({ text: "" });
  const handleButtonClick = () => {
    setFormValue(inputValue)
    setEdit((prevState:boolean) => !prevState)
  }
  return (
    <>
      <form>
        <label>
          Введіть текст:
          <br></br>
          <br></br>
          <textarea
            value={inputValue.text}
            onChange={(e) =>
              setInputValue({
                ...inputValue,
                text: e.target.value })
            }
          />
        </label>
      </form>
      <button className = {styles.btn} onClick={handleButtonClick}> Submit</button>
    </>
  );
};

export default FormState;
