import React, {useState} from "react";
import styles from "./InputPage.module.scss"
import {Button, Input} from "rsuite";

export const SolsRows = ({name, surname, age, position, goal}) => {
    return (
        <div className={styles.rowsContainer}>
            <h5>{name}</h5>
            <h5>{surname}</h5>
            <h5>{age}</h5>
            <h5>{position}</h5>
            <h5>{goal}</h5>
        </div>

    )
}

const SolsInput = () => {
    const [editMode, setEditMode] = useState(false)
    const [nameState, setnameState] = useState("Name")
    const [surnameState, setsurnameState] = useState("Surname")
    const [ageState, setageState] = useState("Age")
    const [positionState, setpositionState] = useState("Position")
    const [goalState, setgoalState] = useState("Surname")


    return (
        <div className={styles.inputContainer}>

            <h2> Hello, this is Sol's input page </h2>
            <br/>

            {
                editMode
                    ? <Input className={styles.input}
                        placeholder="Enter your First name"
                        value={nameState}
                        onChange={(value) => setnameState(value)}/>
                    : <p className={styles.p}>{nameState}</p>
            }
            {
                editMode
                    ? <Input className={styles.input}
                             placeholder="Enter your Last name"
                             value={surnameState}
                             onChange={(value) => setsurnameState(value)}/>
                    : <p className={styles.p}>{surnameState}</p>
            }
            {
                editMode
                    ? <Input className={styles.input}
                             placeholder="Enter your Last name"
                             value={ageState}
                             onChange={(value) => setageState(value)}/>
                    : <p className={styles.p}>{ageState}</p>
            }
            {
                editMode
                    ? <Input className={styles.input}
                             placeholder="Enter your Last name"
                             value={positionState}
                             onChange={(value) => setpositionState(value)}/>
                    : <p className={styles.p}>{positionState}</p>
            }
            {
                editMode
                    ? <Input className={styles.input}
                             placeholder="Enter your Last name"
                             value={goalState}
                             onChange={(value) => setgoalState(value)}/>
                    : <p className={styles.p}>{goalState}</p>
            }

            <Button className={styles.button} color="yellow" appearance="primary" onClick={()=> setEditMode( (prevState) => !prevState)}>
                {editMode ? "Save" : "Edit"}
            </Button>
            <SolsRows
                name= {nameState}
                surname = {surnameState}
                age = {ageState}
                position = {positionState}
                goal = {goalState}>
            </SolsRows>

        </div>

    )
};



export default SolsInput