import { useEffect, useState } from "react";

const initialData = {
    firstname: "Ihor",
    lastname: "Kurylov",
    age: "36",
    agree: true,
}
const Forms = () => {
    const [ formValues, setFormValues ] = useState({});

    useEffect(() => {
    setFormValues(initialData);
    }, [])

    // useEffect(() => {
    //     console.log(formValues)
    // }, [formValues])

    const handleInputChange = (key, value) =>{
        console.log(key, value)
        setFormValues({
            ...formValues,
            [key]: value
        })
    };
const handleSubmit =(e) => {
        e.preventDefault();
    console.log(formValues)
}
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Firstname
                <input
                    name="firstname"
                    type="text"
                    value={formValues.firstname}
                    onChange={(e)=>handleInputChange("firstname", e.target.value)}
                />
            </label>
            <br/>
            <label>
                Lastname:
                <input
                    name="lastname"
                    type="text"
                    value={formValues.lastname}
                    onChange={(e)=>handleInputChange("lastname", e.target.value)}
                />
            </label>
            <br/>
            <label>
                Age
                <input
                    name="age"
                    type="number"
                    value={formValues.age}
                    onChange={(e)=>handleInputChange("age", e.target.value)}
                />
            </label>
            <label>
                Agree
                <input
                    name="agree"
                    type="checkbox"
                    checked={formValues.agree}
                    onChange={(e)=>handleInputChange("agree", e.target.checked)}
                />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}


export default Forms