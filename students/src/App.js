import './App.css';
import Miki from "./pages/solomiya/hanets.jsx"
// import Sasha from "./components/Sasha/Sasha";
// import IhorComponent from "./components/Ihor/Ihor";
import Iryna from './pages/Iryna/Iryna';
import SashaComp from "./pages/SashaLsnk/lysenko.jsx"
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import NotFoundPAge from "./pages/404/NotFoundPAge";
import MainPage from "./pages/Main/MainPage";
import { AppRoutes } from "./common/Routes";
import IhorComponent from "./pages/Ihor/Ihor.jsx";
import MentorContainerPage from "./pages/Mentor/MentorContainerPage";
import HOC from "./components/HOC/HOC";
import { useEffect } from "react";
import { MentorRoute } from "./components/HOC/MentorRoute";

const App = () => {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    useEffect(()=>{
        localStorage.setItem("authUser", JSON.stringify({user: "Ihor", role: "mentor"}))
    },[])

    console.log(authUser);
    return (
        <>
            <Header />
            <Routes>
                <Route path={AppRoutes.MAIN} element={<h1>Main</h1>}/>
                {/*<Route path={AppRoutes.HOC} element={<HOC Component={<h1>COMPONENT argument</h1>} a={12}/>}/>*/}
                <Route path={AppRoutes.MENTOR} element={
                    <MentorRoute authUser={authUser} Component={MentorContainerPage}/>
                }/>
                <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPAge/>}/>
                <Route path={AppRoutes.Ihor} element={<IhorComponent/>}/>
                <Route path="*" element={<NotFoundPAge/>}/>
            </Routes>
            {/*<Miki/>*/}
            {/*<Iryna/>*/}
            {/*<SashaComp/>*/}
        </>
    );
}

export default App;
