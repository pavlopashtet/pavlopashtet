//@ts-ignore
import styles from "./MentorContainerPage.module.scss";
import UserCard from "../../components/userCard/UserCard";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { AppRoutes, RedirectRoutes } from "../../common/Routes";
import React, { useEffect, useState } from "react";
import { Button, Input } from "rsuite";
import Forms from "./forms/Forms";
import Redux from "./Redux";
// import mentorImg from "../../assets/images/IMG_0171.JPG";

// const titleArr = [
//     "Text 1", "Text 2", "Text 3", "Text 4", "Text 5", "Text 6"
// ]
export interface InputState {
    name: string,
    role: string,
}

enum Names {
    Facebook=345,
    Instagram = 997,
    Twitter=9873,
}

const MentorContainerPage = () => {
    const [ editMode, setEditMode ] = useState<boolean>(false);
    const [ inputState, setInputState ] = useState<InputState>({
        name: "Ihor",
        role: "mentor",
    });
    const showClickInfo = (info: string) => console.log(`Clicked on ${info}`)
    const showInfo = () => console.log(`Clicked`)
    //

    console.log(Names[Names.Facebook])
    useEffect(() => {
            // console.log(inputState)
        },
        [ inputState ])

    return (
        <div className={styles.container}>
            <h1>Hello this is my page</h1>
            <h2>New Group</h2>
            <h1>Hello this is my page</h1>
            <h1>Hello this is my page</h1>
            <h1>Hello this is my page</h1>
            <h1>Hello this is my page</h1>
            {/*<img src={mentorImg} alt="image"/>*/}
            <Link to={`${RedirectRoutes.MENTOR}${AppRoutes.CV}`}>
                <span style={{fontSize: '20px'}}>CV</span>
            </Link>
            <Link to="/mentor/users">
                <span style={{fontSize: '20px'}}>User card</span>
            </Link>
            <Link to="/mentor/form">
                <span style={{fontSize: '20px'}}>Form</span>
            </Link>
            <Link to="/mentor/redux">
                <span style={{fontSize: '20px'}}>Redux</span>
            </Link>

            {
                editMode
                    ? <Input
                        placeholder="Full name"
                        value={inputState.name}
                        onChange={(value) => setInputState((prevState) => {
                            return {
                                ...prevState,
                                name: value
                            }
                        })}
                    />
                    : <p className={styles.p}>{inputState.name}</p>
            }
            {
                editMode
                    ? <Input
                        placeholder="position"
                        value={inputState.role}
                        onChange={(value) => setInputState((prevState) => {
                            return {
                                ...prevState,
                                role: value
                            }
                        })}
                    />
                    : <p className={styles.p}>{inputState.role}</p>
            }
            <Button className={styles.btn} color="green" appearance="primary"
                    onClick={() => setEditMode((prevState) => !prevState)}>
                {editMode ? "Save" : "Edit"}
            </Button>


            <Routes>
                <Route path={AppRoutes.CV} element={<h1>CV</h1>}/>
                <Route path="/users" element={<UserCard
                    title="CARD"
                    handleClick={showClickInfo}
                    showInfo={showInfo}
                />}/>
                <Route path={AppRoutes.FORM} element={<Forms />}/>
                <Route path={AppRoutes.REDUX} element={<Redux />}/>
            </Routes>
        </div>
    )
};

export default MentorContainerPage;