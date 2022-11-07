import { React } from "react";
import { Routes, Route } from "react-router-dom";
import { MyRoutes, MyRedirectRoutes } from "../MyRoutes"
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import { RedirectRoutes } from "../../../common/Routes";
import { EnterTypes } from "./Type";


const Firebase = () => {
    return(
  <div>
  
    <Link to={`${RedirectRoutes.Iryna}${MyRedirectRoutes.FIREBASE}${MyRoutes.LOGIN}`}>
      <span style={{ fontSize: "50px" }}>Sign In</span>
    </Link>
    <Link to={`${RedirectRoutes.Iryna}${MyRedirectRoutes.FIREBASE}${MyRoutes.SIGN_UP}`}>
      <span style={{ fontSize: "50px" }}>Sign Up</span>
    </Link>
    <Routes>
      <Route path={MyRoutes.LOGIN} element={<SignUp page={EnterTypes.SIGN_IN}/>}/>
      <Route path={MyRoutes.SIGN_UP} element={<SignUp page={EnterTypes.SIGN_UP}/>}/> 
    </Routes>
  <br/> <br/> <br/> <br/> <br/>
  </div>
    )
};
export default Firebase;
