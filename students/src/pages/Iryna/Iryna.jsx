import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import {RedirectRoutes} from "../../common/Routes";
import { MyRoutes } from "./MyRoutes";
import Con from "./CV/CV";
import { Link } from "react-router-dom";
import MainComponent from "./liftState/liftState";
import styles from "./Iryna.module.css";
import InputState from "./inputState/inputState";
import MainForm from "./formState/MainForm";
import SampleAxios from "./Axios/Axios";

const Iryna = () => {
  const [action, setAction] = useState("true");
  return (
    <div className={styles.Main}>      
      <button
        style={{
          margin: "50px 800px",
          width: "300px",
          height: "150px",
          backgroundColor: "deeppink",
          color: "white",
        }}
        onClick={() => setAction(!action)}
      >
        {" "}
        {action
          ? "Iryna"
          : "My name is Iryna, at the moment I am interested in web development. In addition to frontend, I like sports, namely football and modern dance."}
      </button>
      <Link to={`${RedirectRoutes.Iryna}${MyRoutes.CV}`}>
        <span style={{ fontSize: "50px" }}>CV</span>
      </Link>
      <Link to={`${RedirectRoutes.Iryna}${MyRoutes.MainComponent}`}>
        <span style={{ fontSize: "50px" }}>liftState</span>
      </Link>
      <Link to={`${RedirectRoutes.Iryna}${MyRoutes.InputState}`}>
        <span style={{ fontSize: "50px" }}>InputState</span>
      </Link>
      <Link to={`${RedirectRoutes.Iryna}${MyRoutes.FormState}`}>
        <span style={{ fontSize: "50px" }}>FormState</span>
      </Link>
      <Link to={`${RedirectRoutes.Iryna}${MyRoutes.AXIOS}`}>
        <span style={{ fontSize: "50px" }}>Axios</span>
      </Link>
      <Routes>
        <Route path={MyRoutes.CV} element={<Con />} />
        <Route path={MyRoutes.MainComponent} element={<MainComponent />} />
        <Route path={MyRoutes.InputState} element={<InputState />} />
        <Route path={MyRoutes.FormState}  element={<MainForm/>}/>
        <Route path={MyRoutes.AXIOS}  element={<SampleAxios/>}/>
      </Routes>
    </div>
  );
};
export default Iryna;
