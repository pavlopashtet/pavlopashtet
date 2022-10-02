import styles from "./Consult.module.scss"
import { useEffect } from "react";

const InfoComponent = () => {
    useEffect(() => {
        console.log("InfoComponent")
    })

    useEffect(() => {
        console.log("InfoComponent MOUNT")
    }, [])

    return (
        <>
            <h1>Info</h1>
        </>

    )
}
export default InfoComponent;