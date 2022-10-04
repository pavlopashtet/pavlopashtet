import styles from "../../Natalia/InputNatalia/InputNataliaPage.module.scss";
import {Button, Input} from "rsuite";
import React, {useEffect, useState} from "react";



export const Container = ({ firstName, secondName,text,age, data }) => {
    return (
        <div className={styles.container}>
            <h4>{firstName}</h4>
            <h5>{secondName}</h5>
            <h4>{text}</h4>
            <h4>{age}</h4>
            <h4>{data}</h4>
        </div>
    );
};

const NataCompInput = () => {
    const [ editMode, setEditMode ] = useState(false);
    const [ firstNameState,  setFirstNameState ] = useState("First Name");
    const [ secondNameState,  setSecondNameState ] = useState("Second Name");
    const [ textState,  setTextState ] = useState("Text");
    const [ ageState,  setAgeState ] = useState("Age");
    const [ dataState,  setDataState ] = useState("Data");


  return (
        <div className={styles.wrap}>
            {
                editMode
                    ? <Input className={styles.box}
                             placeholder="Enter name"
                             value={firstNameState}
                             onChange={(value) => setFirstNameState(value)}
                    />
                    : <p className={styles.p}>{firstNameState}</p>
            }
            {
                editMode
                        ? <Input className={styles.box}
                                 placeholder="Enter second name"
                                 value={secondNameState}
                                 onChange={(value) => setSecondNameState(value)}
                        />
                        : <p className={styles.p}>{secondNameState}</p>
            }
            {
                editMode
                            ? <Input className={styles.box}
                                     placeholder="Enter some text"
                                     value={textState}
                                     onChange={(value) => setTextState(value)}
                            />
                            : <p className={styles.p}>{textState}</p>
            }
            {
                editMode
                                ? <Input className={styles.box}
                                         placeholder="Enter your age"
                                         value={ageState}
                                         onChange={(value) => setAgeState(value)}
                                />
                                : <p className={styles.p}>{ageState}</p>
            }
            {
                editMode
                                    ? <Input className={styles.box}
                                             placeholder="Enter some data"
                                             value={dataState}
                                             onChange={(value) => setDataState(value)}
                                    />
                                    : <p className={styles.p}>{dataState}</p>
            }
            {

            }
                <Button className={styles.btn}
                        color="green"
                        appearance="primary"
                        onClick={() => setEditMode((prevState) => !prevState)}>
            {editMode ? "Save" : "Edit"}
                </Button>


            <Container
            firstName = {firstNameState}
            SecondName = {secondNameState}
            Text = {textState}
            Age = {ageState}
            Data = {dataState}
            >

            </Container>

        </div>

    )
            }

export default NataCompInput;





