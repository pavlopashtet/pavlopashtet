import React, { useState} from 'react';
//import { Routes, Route, useParams, useLocation } from "react-router-dom";
//import NotFoundPAge from "../404/NotFoundPAge";
const Vitalii = ()=> {
    const [action, setAction] = useState("true");
    return (
        <div>
            <button onClick={() => setAction(!action)}> {action ? 'Vitalii' : 'My name is Vitalii, at the moment I am interested in web development. In addition to frontend, I like sports, namely football and modern dance.'}
            </button>
        </div>
    );
}
export default Vitalii;