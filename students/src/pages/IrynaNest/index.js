import { Routes, Route, Link } from "react-router-dom";
import Axios from "./axios";
import Redux from "./redux";

const MainPage = () => {

    return ( 
        <div style={{margin:"0 auto",width:"100%", maxWidth:"720px"}}>
            <Link to={"/IrynaNest/axios"}>AXIOS</Link>
            <Link to={"/IrynaNest/redux"}>REDUX</Link>
            <Link to={"/IrynaNest"}>HOME</Link>
            <Routes>
                <Route path={"/axios"} element={<Axios/>}/>
                <Route path={"/redux"} element={<Redux/>}/>
            </Routes>
        </div>
    )
}

export default MainPage;