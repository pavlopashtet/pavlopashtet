import React from "react";
import {OlhaRoute} from "./OlhaRoute";
import {RedirectRoutes} from "../../common/Routes";
import {Link, Route, Routes} from "react-router-dom";
import CvCopmonent from "./ComponentOlha/Cv/cv";
import AxiosComp from './ComponentOlha/Axios/AxiosComp'
import InputComponent from "./ComponentOlha/Input/input";
import ReduxComp from './ComponentOlha/Redux/Redux'
// import "./OlhaNovik.scss"

const OlhaNovikMain = ()=>{
return(
    <div>
    <h1>Page Olha Novik</h1>
    <Link to={`${RedirectRoutes.OlhaNovik}${OlhaRoute.CV}`}>
        <span style={{fontSize: '50px'}}>CV</span>
    </Link>
    <Link  to={`${RedirectRoutes.OlhaNovik}${OlhaRoute.INPUT}`}>
        <span style={{fontSize: '50px'}}>Input</span>
    </Link>
    <Link to={`${RedirectRoutes.OlhaNovik}${OlhaRoute.AXIOS}`}>
        <span style={{ fontSize: "50px" }}>Axios</span>
      </Link>
      <Link to={`${RedirectRoutes.OlhaNovik}${OlhaRoute.REDUX}`}>
        <span style={{ fontSize: "50px" }}>Redux</span>
      </Link>
      <Routes>
    <Route path={OlhaRoute.CV} element={<CvCopmonent/>}/>
    <Route path={OlhaRoute.INPUT} element={<InputComponent/>}/>
    <Route path={OlhaRoute.AXIOS}  element={<AxiosComp/>}/>
    <Route path={OlhaRoute.REDUX}  element={<ReduxComp/>}/>
    </Routes>
</div>
)
};


export default OlhaNovikMain;