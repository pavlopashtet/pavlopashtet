import styles from "./DumbComponent.module.css";
import { useState } from "react";

const DumbComponent2 = ({user}) => {
    return (
        <div className={styles.container}>
            <p>Name: {user.name}</p>
            <p>UserName: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    )
};
export default DumbComponent2;