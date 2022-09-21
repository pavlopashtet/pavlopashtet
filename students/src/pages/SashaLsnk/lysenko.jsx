import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppRoutes, RedirectRoutes } from "../../common/Routes";
import SashaLysenkoCV from "./SashaCV";


const SashaComp = () => {
    const[isActive, setIsActive] = useState("true"); 

    const handleClick = () => {
        setIsActive(current => !current);
    };  

    return(
        <div> 
        <div 
        style={{
            backgroundColor: isActive ? "pink" : "",
            color: isActive ? "AliceBlue" : "",
        }}
        >
        
        <h1>Sasha's Component</h1>
        <button onClick={handleClick}> 
        
        {isActive ? "Where is Sasha?" : "Sasha is here"}

        </button>
        </div>

        <Link to={`${RedirectRoutes.Sasha}${AppRoutes.CV}`}>
        <span style={{ fontSize: "50px" }}>CV</span>
      </Link>    
      <Routes>
        <Route path={AppRoutes.CV} element={<SashaLysenkoCV/>} />
      </Routes>

        </div>
    )
}

export default SashaComp