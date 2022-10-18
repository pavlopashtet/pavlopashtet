import React, {useState} from "react";
import styles from "../FormNata/FormNata.module.scss";


const  FormNataState= ({ setFormValue, setEdit}) => {
    const [inputValue, setInputValue] = useState({ name: "" });
    const handleClick = () => {
        setFormValue(inputValue)
        setEdit((prevState) => !prevState)
    }
    return (
        <>
            <form>
                <label>
                    Enter text:
                    <span></span>
                    <textarea
                        value={inputValue.name}
                        onChange={(e) =>
                            setInputValue({
                                ...inputValue,
                                name: e.target.value })
                        }
                    />
                </label>
            </form>
            <button className = {styles.btn} onClick={handleClick}> Submit</button>
        </>
    );
};

export default FormNataState;