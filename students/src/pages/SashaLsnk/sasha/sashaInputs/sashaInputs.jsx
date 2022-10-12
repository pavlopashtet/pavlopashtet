import React from "react";
import { useState } from "react";
import { Button, Input } from "rsuite";
import styles from "../sashaInputs/sashaInputs.module.css";
import InputsPreview from "./inputsPreview";

const SashaInputs = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("name");
  const [surname, setSurname] = useState("surname");
  const [age, setAge] = useState("age");
  const [role, setRole] = useState("role");
  const [job, setJob] = useState("job");

  return (
    <>
      <div className={styles.inputsContainer}>

        {edit ? (
          <Input
            placeholder="Type your name"
            value={name}
            onChange={(value) => setName(value)}
          />
        ) : (
          <h3 className={styles.p}>{name}</h3>
        )}

        {edit ? (
          <Input
            placeholder="Type your lastname"
            value={surname}
            onChange={(value) => setSurname(value)}
          />
        ) : (
          <h3 className={styles.p}>{surname}</h3>
        )}

        {edit ? (
          <Input
            placeholder="How old are you?"
            value={age}
            onChange={(value) => setAge(value)}
          />
        ) : (
          <h3 className={styles.p}>{age}</h3>
        )}

        {edit ? (
          <Input
            placeholder="Your role is..."
            value={role}
            onChange={(value) => setRole(value)}
          />
        ) : (
          <h3 className={styles.p}>{role}</h3>
        )}

        {edit ? (
          <Input
            placeholder="Your job is..."
            value={job}
            onChange={(value) => setJob(value)}
          />
        ) : (
          <h3 className={styles.p}>{job}</h3>
        )}
      </div>

      <Button
        className={styles.btn}
        color="orange"
        appearance="primary"
        onClick={() => setEdit((prevState) => !prevState)}
      >
        {edit ? "Save" : "Edit"}
      </Button>

      <InputsPreview
        Name={name}
        Surname={surname}
        Age={age}
        Role={role}
        Job={job}
      />
    </>
  );
};

export default SashaInputs;
