import styles from "../formState/formState.module.css";
import { React, useState } from "react";

const FormState = ({ setFormValue, setEdit}) => {
  const [inputValue, setInputValue] = useState({ text: "" });
  const handleButtonClick = () => {
    setFormValue(inputValue)
    setEdit((prevState) => !prevState)
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
