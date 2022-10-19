import React from 'react';
import s from './Content.module.css'
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "../../../common/Routes";
import Cv from "./cv/Cv";
import LiftState from "./liftState/LiftState";
import InputState from "./inputState/InputState";
import FormState from "./formState/FormState";

const Content = () => {
    return (
        <div className={s.container__content}>
            <Routes>
                <Route path={AppRoutes.CV} element={<Cv />} />
                <Route path={AppRoutes.MainComponent} element={<LiftState />} />
                <Route path={AppRoutes.InputState} element={<InputState />} />
                <Route path={AppRoutes.FormState}  element={<FormState />} />
            </Routes>
        </div>

    );
};

export default Content;