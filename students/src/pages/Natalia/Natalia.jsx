import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {AppRoutes, RedirectRoutes} from "../../common/Routes";
import NataliaCV from "./Natalia.cv";
import NataComp from "./DumbCompNata/CompNata";
import NataCompInput from "../Natalia/InputNatalia/InputNataliaPage";
import MainFormContainer from "../Natalia/FormNata/MainFormContainer"
import AxiosNataComp from "./Axios.Nata/Axios.Nata";



class Natalia extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            show:false
        }
    }
    handleClick(){

        this.setState({show: !this.state.show})
    }
    render() {
        return(
            <div>
                <h1> I want change!!!</h1>
                {this.state.show &&<h1>Then start learning something!!!</h1>}
                <button
                    onClick={this.handleClick.bind(this)}>
                    Click me
                </button>


        <Link to={`${RedirectRoutes.NATALIA}${AppRoutes.CV}`}>
            <span style={{ fontSize: "50px" }}>CV</span>
        </Link>
                <Link to={`${RedirectRoutes.NATALIA}${AppRoutes.BTN}`}>
                    <span style={{ fontSize: "50px" }}>BTN</span>
                </Link>
                <Link to={`${RedirectRoutes.NATALIA}${AppRoutes.INPUT}`}>
                    <span style={{ fontSize: "50px" }}>INPUT</span>
                </Link>
                <Link to={`${RedirectRoutes.NATALIA}${AppRoutes.FORM}`}>
                    <span style={{ fontSize: "50px" }}>Form</span>
                </Link>
                <Link to={`${RedirectRoutes.NATALIA}${AppRoutes.AXIOS}`}>
                    <span style={{ fontSize: "50px" }}>Axios</span>
                </Link>

        <Routes>
            <Route path={AppRoutes.CV} element={<NataliaCV/>}/>
            <Route path={AppRoutes.BTN} element={<NataComp/>}/>
            <Route path={AppRoutes.INPUT} element={<NataCompInput/>}/>
            <Route path={AppRoutes.FORM} element={< MainFormContainer/>}/>
            <Route path={AppRoutes.AXIOS} element={< AxiosNataComp/>}/>



        </Routes>


    </div>


        )

    }
}

export default Natalia

