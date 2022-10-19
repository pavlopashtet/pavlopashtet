import styles from "../FormNata/FormNata.module.scss";
import { React, useState } from "react";
import FormNataState from "../FormNata/FormNata";


const MainFormContainer = () => {
    const [formValue, setFormValue] = useState({
        name:"",
         });
    const [edit, setEdit] = useState(false);
    return (
        <div className={styles.container}>
            {edit ? (
                <div className={styles.box}>{formValue.name}</div>
            ) : ("")}
            <FormNataState formValue={formValue} setFormValue={setFormValue} edit = {edit} setEdit = {setEdit}/>

        </div>
    );
};

export default MainFormContainer;



