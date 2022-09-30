import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {AppRoutes, RedirectRoutes} from "../../common/Routes";
import NataliaCV from "./Natalia.cv";
import NataComp from "./DumbCompNata/CompNata";
import NataCompInput from "../Natalia/InputNatalia/InputNataliaPage"
// import FormNataState from "./FormNata/FormNata";

// const [FormValue, setFormValue] = useState();
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

        <Routes>
            <Route path={AppRoutes.CV} element={<NataliaCV/>}/>
            <Route path={AppRoutes.BTN} element={<NataComp/>}/>
            <Route path={AppRoutes.INPUT} element={<NataCompInput/>}/>
            {/*<Route path={AppRoutes.FORM} element={< FormNataState/>}/>*/}



        </Routes>


    </div>


        )

    }
}

export default Natalia

