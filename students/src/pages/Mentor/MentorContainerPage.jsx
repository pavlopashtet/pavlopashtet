import styles from "./MentorContainerPage.module.scss"
import UserCard from "../../components/userCard/UserCard";
import { Link, Route, Routes } from "react-router-dom";
import { AppRoutes, RedirectRoutes } from "../../common/Routes";
import React from "react";
const titleArr = [
    "Text 1", "Text 2", "Text 3", "Text 4", "Text 5", "Text 6"
]

const MentorContainerPage = () => {

    const showClickInfo = (info) => console.log(`Clicked on ${info}`)
    const showInfo = () => console.log(`Clicked`)
    return (
        <div className={styles.container}>
            {/*{titleArr.map((item) => <UserCard*/}
            {/*    title={item}*/}
            {/*    handleClick={showClickInfo}*/}
            {/*    showInfo={showInfo}*/}
            {/*/>)}*/}

            <h1>Hello this is my page</h1>
            <Link to={`${RedirectRoutes.MENTOR}${AppRoutes.CV}`}>
                <span style={{fontSize: '20px'}}>CV</span>
            </Link>
            <Link to="/mentor/users">
                <span style={{fontSize: '20px'}}>User card</span>
            </Link>



      <Routes>
          <Route path={AppRoutes.CV} element={<h1>CV</h1>}/>
          <Route path="/users" element={<UserCard
              title={"CARD"}
              handleClick={showClickInfo}
              showInfo={showInfo}
          />}/>

      </Routes>
        </div>
    )
};

export default MentorContainerPage;