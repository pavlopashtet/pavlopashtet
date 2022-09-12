import React, { useState} from 'react';
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import NotFoundPAge from "../404/NotFoundPAge";
const Iryna = ()=> {
  const [action, setAction] = useState("true");
  return (
    <div>      
      <button onClick={() => setAction(!action)}> {action ? 'Iryna' : 'My name is Iryna, at the moment I am interested in web development. In addition to frontend, I like sports, namely football and modern dance.'}      
      </button>
    </div>
  );
}
export default Iryna;