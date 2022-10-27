import React from "react";
import {RedirectRoutes, AppRoutes} from "../../common/Routes.js";
import {Link, Route, Routes} from "react-router-dom";
import News from "./News/News"
import Applause from "./Applause/Applause"
import s from "./Andrian.module.css"


const Andrian = () => {


    return(
        <>
        <div className={s.linksContainer}>
           <Link to={`${RedirectRoutes.Andrian}${RedirectRoutes.News}`}> 
        <span style={{ fontSize: "20px" }}>News</span>
        </Link>
        <Link to={`${RedirectRoutes.Andrian}${RedirectRoutes.Applause}`}> 
        <span style={{ fontSize: "20px" }}>Applause</span>
       
      </Link>
      </div>
      <Routes>
        <Route path={RedirectRoutes.News} element={<News />} />
        <Route path={RedirectRoutes.Applause} element={<Applause />} />
      
    
      </Routes>
        </>
    )
}

export default Andrian;



