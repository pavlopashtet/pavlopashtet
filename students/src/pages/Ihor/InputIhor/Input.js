import {Button, Input} from "rsuite";
import styles from './InputIh.module.css'
import {useEffect, useState} from "react";


const InputIh = () => {
    const [editMode,setEditMode] = useState(false)
    const [inputState, setInputState] = useState ({
        name: 'Ihor',
        role: 'student'
    })
    useEffect(()=> {
        console.log(inputState)
    }, [inputState])
    return (
 <div className={styles.inputCss}>
     {
         editMode
             ? <Input
                 placeholder="Default Input"
                 value={inputState.name}
                 onChange={(value)=>setInputState((prevState) =>{
                     return{
                     ...prevState,
                         name: value
                     }
                 } )}
             />
             : <p> {inputState.name}</p>
     }
     {
         editMode
             ? <Input
                 placeholder="Default Input"
                 value={inputState.role}
                 onChange={(value)=>setInputState((prevState) =>{
                     return{
                     ...prevState,
                         role: value
                     }
                 } )}
             />
             : <p> {inputState.role}</p>
     }
     <Button color="green" appearance="primary" onClick={()=>setEditMode((prevState) => !prevState)}>
         {editMode ? "Save": "Edit"}
     </Button>
 </div>
    )
}

export default InputIh;