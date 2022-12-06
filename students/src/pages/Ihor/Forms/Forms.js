import {useEffect, useState} from "react";

const InitialData = {
    firstname: 'John',
    lastname: 'Smith',
    age: '16',
    agree: true,
}

const Forms = () => {
    const [formValues, setFromValues] = useState({});
    useEffect(() => {
        setFromValues(InitialData);
    }, [])

    // useEffect(()=>{
    //     console.log(formValues)
    // }, [formValues]);

    const handleInputChange = (key, value) =>{
        console.log(key,value)
        setFromValues({
            ...setFromValues,
            [key]: value
        })

    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formValues)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                FirstName:
                <input
                    name="FirstName"
                    type="text"
                    value={formValues.firstname}
                    onChange={(e)=>handleInputChange('firstname', e.target.value)}
                />
            </label>
            <br/>
            <label>
                LastName:
                <input
                    name="LastName"
                    type="text"
                    value={formValues.lastname}
                    onChange={(e)=>handleInputChange('LastName', e.target.value)}
                />
            </label>
            <br/>
            <label>
                Age:
                <input
                    name="age"
                    type="number"
                    value={formValues.age}
                    onChange={(e)=>handleInputChange('age', e.target.value)}
                />
            </label>
            <label>
                Agree:
                <input
                    name="agree"
                    type="checkbox"
                    checked={formValues.agree}
                    onChange={(e)=>handleInputChange('agree', e.target.checked)}
                />
            </label>
            <input type='submit' value='submit'/>
        </form>
    );
}

export default Forms;