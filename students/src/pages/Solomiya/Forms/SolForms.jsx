import React, {useState, useEffect} from "react";
import styles from "./SolForms.module.scss";



const initialData = {
    firstname:"Sol",
    lastname: "Han",
    age: "140",
    position: "student",
    agree: true,
}

const SolsForms = () => {
    const [formValues, setFormValues] = useState({});

    useEffect(() => {
    setFormValues(initialData);
    },[])

    // useEffect(()=>{
    // console.log(formValues)
    // },[formValues])

    const handleInputChange = (key, value) => {
        // console.log(key, value)
        setFormValues( {
            ...formValues,
            [key]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}>Forms</h1>
            <div className={styles.formWrapper}>
                <form  onSubmit={handleSubmit}>
                    <label>
                        First name:
                    </label>
                    <input
                            name="firstname"
                            type="text"
                            value = {formValues.firstname}
                            onChange={(e)=>handleInputChange("firstname", e.target.value)}
                        />
                    <br />
                    <label>
                        Last name:
                    </label>
                    <input
                            name="lastname"
                            type="text"
                            value = {formValues.lastname}
                            onChange={(e)=>handleInputChange("lastname", e.target.value)}
                        />
                    <br />
                    <label>
                        Age:
                    </label>
                    <input
                            name="age"
                            type="number"
                            value= {formValues.age}
                            onChange={(e)=>handleInputChange("age", e.target.value)}
                        />
                    <br />
                    <label>
                        Position:
                    </label>
                    <input
                        name="position"
                        type="text"
                        value = {formValues.position}
                        onChange={(e)=>handleInputChange("firstname", e.target.value)}
                        />
                    <br />
                    <label>
                        Agree:
                        <input
                            name="agree"
                            type="checkbox"
                            checked = {formValues.agree}
                            onChange={(e)=>handleInputChange("agree", e.target.checked)}
                        />
                    </label>
                    <br/>
                    <input
                        type="submit"
                        value= "Submit"
                    />
                </form>
                <div className={styles.infoBlock}>
                    <h6> First Name: {formValues.firstname}</h6>
                    <h6> Last Name: {formValues.lastname}</h6>
                    <h6> Age: {formValues.age}</h6>
                    <h6> Position: {formValues.position}</h6>
                </div>
            </div>
        </div>

    )
}

export default SolsForms