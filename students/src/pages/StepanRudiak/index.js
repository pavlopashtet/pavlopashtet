import React from 'react';
import styleModule from './style/rudeStyle.module.sass';
import {NavLink} from "react-router-dom";
import {AppRoutes, RedirectRoutes} from "../../common/Routes";
import {Routes, Route} from "react-router-dom";
import WeatherWidget from "./components/WeatherWidget";
import FormSR from "./components/FormSR";
import CVRude from "./components/CVRude";

const StepanRudiak = () => {
  return (
    <div className={styleModule.wrapper}>
      <div className={styleModule.container}>
        <div className={styleModule.navigate}>
          <div className={styleModule.all}>
            <div className={styleModule.lefter}>
              <div className={styleModule.text}>Work in progress</div>
            </div>
            <NavLink className={styleModule.left} to={RedirectRoutes.StepanRudiak + AppRoutes.FormState}>
              <div className={styleModule.text}>form</div>
            </NavLink>
            <NavLink className={styleModule.center} to={RedirectRoutes.StepanRudiak + AppRoutes.CV}>
              <div className={styleModule.explainer}><span>Hover me</span></div>
              <div className={styleModule.text}>CV</div>
            </NavLink>

            <NavLink className={styleModule.right} to={RedirectRoutes.StepanRudiak + '/weather'}>
              <div className={styleModule.text}>Weather Widget</div>
            </NavLink>

            <div className={styleModule.righter}>
              <div className={styleModule.text}>Work in progress</div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path={'/weather'} element={<WeatherWidget/>}/>
          <Route path={AppRoutes.CV} element={<CVRude/>}/>
          <Route path={AppRoutes.FormState} element={<FormSR/>}/>
        </Routes>
      </div>

    </div>
  );
};

export default StepanRudiak;