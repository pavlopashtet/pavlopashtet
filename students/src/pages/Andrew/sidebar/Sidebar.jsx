import React from 'react';
import s from './Sidebar.module.css'
import {AppRoutes, RedirectRoutes} from "../../../common/Routes";
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => (isActive? s.active : s.item)

const Sidebar = () => {
    return (
        <div className={s.container__sidebar}>
            <div className={s.item}>
                <NavLink className={setActive} to = {`${RedirectRoutes.Andrew}${AppRoutes.CV}`}>Cv</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={setActive} to = {`${RedirectRoutes.Andrew}${AppRoutes.MainComponent}`}>liftState</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={setActive} to = {`${RedirectRoutes.Andrew}${AppRoutes.InputState}`}>InputState</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={setActive} to = {`${RedirectRoutes.Andrew}${AppRoutes.FormState}`}>FormState</NavLink>
            </div>
        </div>
    );
};

export default Sidebar;