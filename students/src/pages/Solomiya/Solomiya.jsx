import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {SolRoutes} from "./SolomiyaRoutes";
import {RedirectRoutes} from "../../common/Routes";
import styles from "./CVpages/SolomiyaPage.module.scss"
import SolomiyaComponentPage from "./CVpages/CVPageSolomiya";
import SolsComponent from "./Components/SolsDumbComponent";
import SolsInput from "./StateControledComp/SolsInputPage";


const Main = () => {
    return (
        <div className={styles.container}>

            <h1 className={styles.header}>Sol's Component Page</h1>

            <Link className={styles.box} to={`${RedirectRoutes.Solomiya}${SolRoutes.CV}`}>
                <span style={{fontSize: '20px'}}>CV</span>
            </Link>
            <Link className={styles.box} to={`${RedirectRoutes.Solomiya}${SolRoutes.STATE}`}>
                <span style={{fontSize: '20px'}}>States</span>
            </Link>
            <Link className={styles.box} to={`${RedirectRoutes.Solomiya}${SolRoutes.INPUT}`}>
                <span style={{fontSize: '20px'}}>Input</span>
            </Link>

        </div>
    )
};

export const Solomiya = ()=> {
    return (
        <Routes>
            <Route path={SolRoutes.MAIN} element={<Main/>}/>
            <Route path={SolRoutes.CV} element={<SolomiyaComponentPage/>}/>
            <Route path={SolRoutes.STATE} element={<SolsComponent/>}/>
            <Route path={SolRoutes.INPUT} element={<SolsInput/>}/>

        </Routes>
    )
}

export default Solomiya