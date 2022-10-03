import React, { useState } from "react";
import styles from "./inputState.module.css";
import { Button, Input } from "rsuite";

export const Preview = ({ Name, Surname, Age, Education, Hobby }) => {
  return (
    <div className={styles.preview}>
      <h3>{Name}</h3>
      <h3>{Surname}</h3>
      <h3>{Age}</h3>
      <h3>{Education}</h3>
      <h3>{Hobby}</h3>
    </div>
  );
};

const InputState = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("Name");
  const [surname, setSurname] = useState("Surname");
  const [age, setAge] = useState("Age");
  const [education, setEducation] = useState("Education");
  const [hobby, setHobby] = useState("Hobby");

  return (
    <div className={styles.inputState}>
      {edit ? (
        <Input
          className={styles.input}
          placeholder="Enter your First name"
          value={name}
          onChange={(value) => setName(value)}
        />
      ) : (
        <p className={styles.p}>{name}</p>
      )}
      {edit ? (
        <Input
          className={styles.input}
          placeholder="Enter your Last name"
          value={surname}
          onChange={(value) => setSurname(value)}
        />
      ) : (
        <p className={styles.p}>{surname}</p>
      )}
      {edit ? (
        <Input
          className={styles.input}
          placeholder="Enter your Last name"
          value={age}
          onChange={(value) => setAge(value)}
        />
      ) : (
        <p className={styles.p}>{age}</p>
      )}
      {edit ? (
        <Input
          className={styles.input}
          placeholder="Enter your Last name"
          value={education}
          onChange={(value) => setEducation(value)}
        />
      ) : (
        <p className={styles.p}>{education}</p>
      )}
      {edit ? (
        <Input
          className={styles.input}
          placeholder="Enter your Last name"
          value={hobby}
          onChange={(value) => setHobby(value)}
        />
      ) : (
        <p className={styles.p}>{hobby}</p>
      )}

      <Button
        className={styles.button}
        color="pink"
        appearance="primary"
        onClick={() => setEdit((prevState) => !prevState)}
      >
        {edit ? "Save" : "Edit"}
      </Button>
      <Preview
        Name={name}
        Surname={surname}
        Age={age}
        Education={education}
        Hobby={hobby}
      ></Preview>
    </div>
  );
};

export default InputState;
