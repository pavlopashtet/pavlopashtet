import React from "react";
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "../../common/Routes";
import NotFoundPAge from "../404/NotFoundPAge";
import {IhorRout} from "./IhorRouts";

const IhorComponent = ()=>{
    return(
        <div>
        <h1>Ihor's Component</h1>

    <Routes>
        <Route path={IhorRout.CVROUTE} element={<h2>CV</h2>}/>
    </Routes>
        </div>
    )
}

export default IhorComponent