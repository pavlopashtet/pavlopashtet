import React from "react";
import { AppRoutes, RedirectRoutes } from "../../common/Routes";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Cv } from "./natalkaComponents/cv/Cv";
import { FormStateComponent } from "./natalkaComponents/formState/FormState";
import { InputStateComponent } from "./natalkaComponents/inputState/InputState";
import { StateComponent } from "./natalkaComponents/state/State";
import {AxiosComponent} from "./natalkaComponents/axios/AxiosComponent"
import { ReduxComponent } from "./natalkaComponents/redux/ReduxComponent";
import s from "./NataliaK.module.scss"



const NataliaKoziarComponent = () => {
    return (
        <div className={s.container}>
            <div className={s.menu_link}>
        <NavLink to ={`${RedirectRoutes.NataliaKoziar}${AppRoutes.CV}`}>
            <span>CV</span>
        </NavLink>
        <NavLink to ={`${RedirectRoutes.NataliaKoziar}${AppRoutes.MainComponent}`}>
            <span>State</span>
        </NavLink>
        <NavLink to ={`${RedirectRoutes.NataliaKoziar}${AppRoutes.InputState}`}>
            <span>Input state</span>
        </NavLink>
        <NavLink to ={`${RedirectRoutes.NataliaKoziar}${AppRoutes.FormState}`}>
            <span>Form</span>
        </NavLink>
        <NavLink to ={`${RedirectRoutes.NataliaKoziar}${AppRoutes.AXIOS}`}>
            <span>Axios</span>
        </NavLink>
        <NavLink to ={`${RedirectRoutes.NataliaKoziar}${AppRoutes.REDUX}`}>
            <span>Redux</span>
        </NavLink>
            </div>
            <div className={s.description}>
        <Routes>
            <Route path={AppRoutes.CV} element={<Cv/>}/>
            <Route path={AppRoutes.MainComponent} element={<StateComponent/>}/>
            <Route path={AppRoutes.InputState} element={<InputStateComponent/>}/>
            <Route path={AppRoutes.FormState} element={<FormStateComponent/>}/>
            <Route path={AppRoutes.AXIOS} element={<AxiosComponent/>}/>
            <Route path={AppRoutes.REDUX} element={<ReduxComponent/>}/>
        </Routes>
            </div>

        </div>
    )
}

export default NataliaKoziarComponent