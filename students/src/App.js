import './App.css';
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import MentorContainerPage from "./pages/Mentor/MentorContainerPage";
import NotFoundPAge from "./pages/404/NotFoundPAge";
import IhorComponent from "./pages/Ihor/Ihor";
import { AppRoutes } from "./common/Routes";

import { useEffect } from "react";
import Vitalii from "./pages/Vitalii/Vitalii";



const App = () => {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    useEffect(()=>{
        localStorage.setItem("authUser", JSON.stringify({user: "Ihor", role: "mentor"}))
    },[])

    console.log(authUser);
    return (
        <>
            <Header/>
            <Routes>
                <Route path={AppRoutes.MENTOR} element={<MentorContainerPage />}/>



                <Route path={AppRoutes.MAIN} element={<h1>Main</h1>}/>
                {/*<Route path={AppRoutes.HOC} element={<HOC Component={<h1>COMPONENT argument</h1>} a={12}/>}/>*/}
                {/*<Route path={AppRoutes.MENTOR} element={*/}
                {/*    <MentorRoute authUser={authUser} Component={MentorContainerPage}/>*/}
                {/*}/>*/}
                <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPAge/>}/>
                <Route path={AppRoutes.Ihor} element={<IhorComponent/>}/>
                <Route path="*" element={<NotFoundPAge/>}/>
            </Routes>
        </>
    );

}

export default App;


// <Header />

// {/*<Miki/>*/}
// {/*<Iryna/>*/}
// {/*<SashaComp/>*/}
<Vitalii/>

