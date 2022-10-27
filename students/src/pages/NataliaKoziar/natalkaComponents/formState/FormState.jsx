import { useState } from "react"
import s from "./FormState.module.scss"

export const FormStateComponent = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');
   const [users, setUsers] = useState([])
   const addUser=()=>{
    setUsers([
        ...users,
        {
            lname,
            fname,
            age,
            role,
            id:new Date().toISOString()
        }
    ])
    setFname('');
    setLname('');
    setAge('');
    setRole('');
    console.log(users);
}
    return (
        <>
            <h2>FormStateComponent</h2>
            <form>
                <label>First name: </label>
                <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
                <label>Last name:</label>
                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                <label>Role:</label>
                <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
                <input style={{
                    margin: '10px 0px',
                    width: "70px"
                }} type="button" value="Create" onClick={addUser} disabled = {!lname.trim() || !fname.trim() || !age || !role.trim()}/>
            </form>
        </>
    )
}