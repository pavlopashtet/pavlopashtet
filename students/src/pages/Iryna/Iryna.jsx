import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { AppRoutes, RedirectRoutes } from "../../common/Routes";
import Con from "./CV/CV";
import { Link } from "react-router-dom";
import MainComponent from "./liftState/liftState";
// import NotFoundPAge from "../404/NotFoundPAge";
import styles from "./Iryna.module.css";
import InputState from "./inputState/inputState";
import FormState from "./formState/formState";

const Iryna = () => {
  const [action, setAction] = useState("true");
  return (
    <div className={styles.Main}>

<button
        style={{ margin: "50px 800px", width: "300px", height: "150px", backgroundColor:"deeppink", color:"white"}}
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
      <Link to={`${RedirectRoutes.Iryna}${AppRoutes.MainComponent}`}>
        <span style={{ fontSize: "50px" }}>liftState</span>
      </Link>  
      <Link to={`${RedirectRoutes.Iryna}${AppRoutes.InputState}`}>
        <span style={{ fontSize: "50px" }}>InputState</span>
      </Link> 
      <Link to={`${RedirectRoutes.Iryna}${AppRoutes.FormState}`}>
        <span style={{ fontSize: "50px" }}>FormState</span>
      </Link> 
      <Routes>
        <Route path={AppRoutes.CV} element={<Con/>} />
        <Route path={AppRoutes.MainComponent} element={<MainComponent/>} />
        <Route path={AppRoutes.InputState} element={<InputState/>} />
        <Route path={AppRoutes.FormState} element={<FormState/>} />
      </Routes>


    </div>
    

    
    
  );
};
export default Iryna;
