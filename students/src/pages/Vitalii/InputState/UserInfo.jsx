import {React, useEffect, useState} from "react";
import styles from "./InputPage.module.scss";
import {Button, Input} from "rsuite";

const UserInput = ()=>{
    const [editMode,setEditMode]=useState(false);
    const [InputState,setInputState]=useState({
        name:"Vitalii",
        role:"student"
    });
    useEffect(()=>{
        console.log(InputState);
    },[InputState])
    return(
        <div className={styles.newInput}>
        <h1>Hello World!</h1>
            {
                editMode ? <Input
                        placeholder={"default input"}
                        value={InputState.name}
                        onChange={(value)=>setInputState((prevState) =>
                            {
                                return{
                                    ...prevState,
                                    name:value
                                }
                            }
                        )}>

                    </Input>:
                    <p className={styles.p}>{InputState.name}</p>
            }

            {
                editMode ? <Input
                        placeholder={"default input"}
                        value={InputState.role}
                        onChange={(value)=>setInputState((prevState) =>
                            {
                                return{
                                    ...prevState,
                                    role:value
                                }
                            }
                        )}>

                    </Input>:
                    <p className={styles.p}>{InputState.role}</p>
            }
            <Button className={styles.btn} color="orange" appearance="primary" onClick={()=>setEditMode((prevState)=> !prevState)}>
                {editMode ? "Save" : "Edit"}
            </Button>
        </div>
    )

}
export default UserInput;