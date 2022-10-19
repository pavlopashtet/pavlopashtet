import React from "react";
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "../../common/Routes";

const AndrewComponent = ()=>{
    return(
        <div>
        <h1>Andrew's Component</h1>

    <Routes>
        <Route path={AppRoutes.Andrew} element={<h2>CV</h2>}/>
    </Routes>
        </div>
    )
}

export default AndrewComponent