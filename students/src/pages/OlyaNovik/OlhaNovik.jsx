import React from "react";
import {OlhaRoute} from "./OlhaRoute";
import {RedirectRoutes} from "../../common/Routes";
import {Link, Route, Routes} from "react-router-dom";
import CvCopmonent from "./ComponentOlha/Cv/cv";
import InputComponent from "./ComponentOlha/Input/input";
import "./OlhaNovik.scss"

const OlhaNovikMain = ()=>{
return(
    
    <div>
    <h1>Page Olha Novik</h1>
    <Link className="routestyle" to={`${RedirectRoutes.OlhaNovik}${OlhaRoute.CV}`}>
        <span style={{fontSize: '20px'}}>CV</span>
    </Link>
    <Link className="routestyle" to={`${RedirectRoutes.OlhaNovik}${OlhaRoute.INPUT}`}>
        <span style={{fontSize: '20px'}}>Input</span>
    </Link>
</div>
)
};

export const OlhaNovikRoutes = ()=> {
return (
<Routes>
    <Route path={OlhaRoute.MAIN} element={<OlhaNovikMain/>}/>
    <Route path={OlhaRoute.CV} element={<CvCopmonent/>}/>
    <Route path={OlhaRoute.INPUT} element={<InputComponent/>}/>
</Routes>
)
}

export default OlhaNovikRoutes
