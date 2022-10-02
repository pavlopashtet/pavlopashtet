import React, {useState} from "react";




const FormNataState = () => {
    const [formValue, setFormValue] = useState("kjb");
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
                  Enter text
                  <input name="usertext" value={formValue} onChange={this.handleChange}/>
              </label>
            </form>
        <button onClick={this.handleSubmit}>Submit</button>
        </>
    )

}
export default FormNataState;