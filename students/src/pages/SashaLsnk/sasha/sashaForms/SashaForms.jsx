import styles from "../sashaForms/SashaForms.module.css";
import { React, useState } from "react";

const FormContainer = ({ setFormValue, setEdit}) => {
  const [inputValue, setInputValue] = useState({ text: "" });
  const handleSubmit = () => {
    setFormValue(inputValue)
    setEdit((prevState) => !prevState)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
        <br></br>        
          Type here: 
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
        {/* <input type="submit" /> */}
      </form>      
      <button className = {styles.button} onClick={handleSubmit}> Submit</button>
    </>
  );
};

export default FormContainer;
