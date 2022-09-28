import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {AppRoutes, RedirectRoutes} from "../../common/Routes";
import NataliaCV from "./Natalia.cv";



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
            {/*<span style={{ fontSize: "50px" }}>BTN</span>*/}
        </Link>
        <Routes>
            <Route path={AppRoutes.CV} element={<NataliaCV/>} />
            {/*<Route path={AppRoutes.BTN} element={<NataComp/>}/>*/}
        </Routes>


    </div>




        )

    }
}

export default Natalia

