import s from './Andrew.module.css'
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";


const AndrewComponent = ()=>{
    return(
        <div className={s.container}>
            <Sidebar />
            <Content />
        </div>
    )
}

export default AndrewComponent