import React from 'react';
import s from './Content.module.css'
import {Route, Routes} from "react-router-dom";
import {RedirectRoutes} from "../../../common/Routes";
import Cv from "./cv/Cv";
import LiftState from "./liftState/LiftState";
import InputState from "./inputState/InputState";
import FormState from "./formState/FormState";

const Content = () => {
    return (
        <div className={s.container__content}>
            <Routes>
                <Route path={RedirectRoutes.CV} element={<Cv />} />
                <Route path={RedirectRoutes.MainComponent} element={<LiftState />} />
                <Route path={RedirectRoutes.InputState} element={<InputState />} />
                <Route path={RedirectRoutes.FormState}  element={<FormState />} />
            </Routes>
        </div>

    );
};

export default Content;