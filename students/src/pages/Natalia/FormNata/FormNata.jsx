import React, {useState} from "react";




const FormNataState = () => {
    const [formValue, setFormValue] = useState({
        name:"",
        email:"",
    })
    // const handleChange = (event) =>{
    //     setFormValue(event.target.event);
    // }
    // handleSubmit (event)
    // {
    //     event.preventDefault()
    // }
    return(
        <>
        <form >
              <label>
                 <h1> Enter text</h1>
                  <input name="usertext" value={formValue.name}
                         onChange={(event) => setFormValue(event.target.value)
                         }/>
              </label>
            </form>
        <button>Submit</button>
        </>
    )


}
export default FormNataState;