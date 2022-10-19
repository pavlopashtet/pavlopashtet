import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {SolRoutes} from "./SolomiyaRoutes";
import {RedirectRoutes} from "../../common/Routes";
import styles from "./CVpages/SolomiyaPage.module.scss"
import SolomiyaComponentPage from "./CVpages/CVPageSolomiya";
import SolsComponent from "./Components/SolsDumbComponent";
import SolsInput from "./StateControledComp/SolsInputPage";
import SolsForms from "./Forms/SolForms";
import LibForm from "./Forms/LibForms";
import MyPractice from "./Practice/SolPractice";
import SolsAxios from "./Axios/Axios";
import SolsRedux from "./Redux/Redux";
import NewAxios from "./AxiosNew/NewAxios";


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
            <Link className={styles.box} to={`${RedirectRoutes.Solomiya}${SolRoutes.FORM}`}>
                <span style={{fontSize: '20px'}}>Form</span>
            </Link>
            <Link className={styles.box} to={`${RedirectRoutes.Solomiya}${SolRoutes.LIBFORM}`}>
                <span style={{fontSize: '20px'}}>Lib Form</span>
            </Link>
            <Link className={styles.box} to={`${RedirectRoutes.Solomiya}${SolRoutes.CONSULT}`}>
                <span style={{fontSize: '20px'}}>Consult</span>
            </Link>
            <Link className={styles.box} to={`${RedirectRoutes.Solomiya}${SolRoutes.AXIOS}`}>
                <span style={{fontSize: '20px'}}>Axios</span>
            </Link>
            <Link className={styles.box} to={`${RedirectRoutes.Solomiya}${SolRoutes.REDUX}`}>
                <span style={{fontSize: '20px'}}>Redux</span>
            </Link>
            <Link className={styles.box} to={`${RedirectRoutes.Solomiya}${SolRoutes.NEWAXIOS}`}>
                <span style={{fontSize: '20px'}}>New Axios</span>
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
            <Route path={SolRoutes.FORM} element={<SolsForms/>}/>
            <Route path={SolRoutes.LIBFORM} element={<LibForm/>}/>
            <Route path={SolRoutes.CONSULT} element={<MyPractice/>}/>
            <Route path={SolRoutes.AXIOS} element={<SolsAxios/>}/>
            <Route path={SolRoutes.REDUX} element={<SolsRedux/>}/>
            <Route path={SolRoutes.NEWAXIOS} element={<NewAxios/>}/>

        </Routes>
    )
}

export default Solomiya