
import React, {  useState } from "react"
//@ts-ignore
import s from "./FormState.module.scss"

interface User {

    lname: string
    fname: string
    age: string
    role: string
    id: string

}

export const FormStateComponent = () => {
    const [fname, setFname] = useState<string>('');
    const [lname, setLname] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [users, setUsers] = useState<User[]>([])
    const addUser = () => {
        setUsers([
            ...users,
            {
                lname,
                fname,
                age,
                role,
                id: new Date().toISOString()
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
                <input type="text" value={fname} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFname(e.target.value)} />
                <label>Last name:</label>
                <input type="text" value={lname} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setLname(e.target.value)} />
                <label>Age:</label>
                <input type="number" value={age} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)} />
                <label>Role:</label>
                <input type="text" value={role} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setRole(e.target.value)} />
                <input style={{
                    margin: '10px 0px',
                    width: "70px"
                }} type="button" value="Create" onClick={addUser} disabled={!lname.trim() || !fname.trim() || !age || !role.trim()} />
            </form>
        </>
    )
}