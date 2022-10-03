import styles from "../../Natalia/InputNatalia/InputNataliaPage.module.scss";
import button from "../../additional pages/consult/page components/Button";
import {Button, Input} from "rsuite";
import React, {useEffect, useState} from "react";

//
// const NataCompInput = ({firstName,secondName,text,age, data}) => {

// const [ inputState, setInputState ] = useState({

const NataCompInput = () => {
    const [ editMode, setEditMode ] = useState(false);
    const [ firstNameState,  setFirstNameState ] = useState("First Name");
    const [ secondNameState,  setSecondNameState ] = useState("Second Name");
    const [ textState,  setTextState ] = useState("Text");
    const [ ageState,  setAgeState ] = useState("Age");
    const [ dataState,  setDataState ] = useState("Data");


  return (
        <div>
            {
                editMode
                    ? <Input className={styles.box}
                             placeholder="Enter name"
                             value={firstNameState}
                             onChange={(value) => setFirstNameState((value))}
                    />
                    : <p className={styles.p}>{firstNameState}</p>
            }
            {
                editMode
                        ? <Input className={styles.box}
                                 placeholder="Enter second name"
                                 value={secondNameState}
                                 onChange={(value) => setSecondNameState((value))}
                        />
                        : <p className={styles.p}>{secondNameState}</p>
            }
            {
                editMode
                            ? <Input className={styles.box}
                                     placeholder="Enter some text"
                                     value={textState}
                                     onChange={(value) => setTextState((value))}
                            />
                            : <p className={styles.p}>{textState}</p>
            }
            {
                editMode
                                ? <Input className={styles.box}
                                         placeholder="Enter your age"
                                         value={ageState}
                                         onChange={(value) => setAgeState((value))}
                                />
                                : <p className={styles.p}>{ageState}</p>
            }
            {
                editMode
                                    ? <Input className={styles.box}
                                             placeholder="Enter some data"
                                             value={dataState}
                                             onChange={(value) => setDataState((value))}
                                    />
                                    : <p className={styles.p}>{dataState}</p>
            }
            {

            }
                <Button className={styles.btn} color="green" appearance="primary"
                        onClick={() => setEditMode((prevState) => !prevState)}>
            {editMode ? "Save" : "Edit"}
                </Button>

            <h3>{firstNameState.name}</h3>
            <h3>{secondNameState.name}</h3>



        </div>

    )
            }


export default NataCompInput;






    // <div className={styles.container}>
    //     <h3>{firstName}</h3>First name
    //     <input name/>
    //     <h3>{secondName}</h3>
    //     <h3>{text}</h3>
    //     <h3>{age}</h3>
    //     <h3>{data}</h3>
    // </div>
    //
