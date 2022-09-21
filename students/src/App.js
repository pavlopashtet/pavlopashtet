import './App.css';
import React from "react";
import Vitalii from "./pages/Vitalii/Vitalii";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import NotFoundPAge from "./pages/404/NotFoundPAge";
import IhorComponent from "./pages/Ihor/Ihor";
import { AppRoutes } from "./common/Routes";

import { useEffect } from "react";

const App = () => {
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  useEffect(()=>{
    localStorage.setItem("authUser", JSON.stringify({user: "Ihor", role: "mentor"}))
  },[])

  console.log(authUser);
  return (
      <>
        <Header />
        <Routes>
          <Route path={AppRoutes.Ihor} element={<IhorComponent/>}/>
          <Route path="/404" element={<NotFoundPAge/>}/>
          <Route path="*" element={<NotFoundPAge/>}/>
        </Routes>
        <Vitalii/>
        {/*<Miki/>*/}
        {/*<Iryna/>*/}
        {/*<SashaComp/>*/}
      </>
  );
}

export default App;
