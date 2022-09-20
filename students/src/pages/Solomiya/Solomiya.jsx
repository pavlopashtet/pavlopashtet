import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {SolRoutes} from "./SolomiyaRoutes";
import {AppRoutes, RedirectRoutes} from "../../common/Routes";
import styles from "./CVpages/SolomiyaPage.module.scss"
import SolomiyaComponentPage from "./CVpages/CVPageSolomiya";


const Main = () => {
    return (
        <div className={styles.container}>

            <h1 className={styles.header}>Sol's Component Page</h1>

            <Link className={styles.box} to={`${RedirectRoutes.Solomiya}${SolRoutes.CV}`}>
                <span style={{fontSize: '20px'}}>CV</span>
            </Link>

        </div>
    )
};

export const Solomiya = ()=> {
    return (
        <Routes>
            <Route path={AppRoutes.MAIN} element={<Main/>}/>
            <Route path={SolRoutes.CV} element={<SolomiyaComponentPage/>}/>

        </Routes>
    )
}

export default Solomiya