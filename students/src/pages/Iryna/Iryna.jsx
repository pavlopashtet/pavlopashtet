import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { AppRoutes, RedirectRoutes } from "../../common/Routes";
import Con from "./CV/CV";
import { Link } from "react-router-dom";
import MainComponent from "./liftState/liftState";
// import NotFoundPAge from "../404/NotFoundPAge";


const Iryna = () => {
  const [action, setAction] = useState("true");
  return (
    <>
      <button
        style={{ margin: "50px", width: "200px", height: "100px" }}
        onClick={() => setAction(!action)}
      >
        {" "}
        {action
          ? "Iryna"
          : "My name is Iryna, at the moment I am interested in web development. In addition to frontend, I like sports, namely football and modern dance."}
      </button>  
      <Link to={`${RedirectRoutes.Iryna}${AppRoutes.CV}`}>
        <span style={{ fontSize: "50px" }}>CV</span>
      </Link>    
      <Routes>
        <Route path={AppRoutes.CV} element={<Con/>} />
      </Routes>
     

     <MainComponent/>
   

    </>
    
  );
};
export default Iryna;
