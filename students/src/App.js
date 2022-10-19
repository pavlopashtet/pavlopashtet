import './App.css';
import Iryna from './pages/Iryna/Iryna';
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import NotFoundPAge from "./pages/404/NotFoundPAge";
import { AppRoutes } from "./common/Routes";
import MentorContainerPage from "./pages/Mentor/MentorContainerPage";
// import HOC from "./Components/HOC/HOC";
import { useEffect } from "react";
import { MentorRoute } from "./components/HOC/MentorRoute";
import NataliaComponent from "./pages/Natalia/Natalia";
import IhorComponent from "./pages/Ihor/Ihor";
import Solomiya from "./pages/Solomiya/Solomiya";
import Vitalii from "./pages/Vitalii/Vitalii";
import "rsuite/dist/rsuite.min.css";
import ConsultContainer from "./pages/additional pages/consult/Consult";
import AxiosPage from "./pages/Mentor/Axios";
import NataliaKoziarComponent from './pages/NataliaKoziar/NataliaKoziarComponent';
import SashaComp from "./pages/SashaLsnk/sasha/sashaComponent/SashaComp";
import NewAxiosPage from "./pages/Mentor/NewAxios";
import AndrewComponent from "./pages/Andrew/Andrew";


const App = () => {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    useEffect(()=>{
        localStorage.setItem("authUser", JSON.stringify({user: "Ihor", role: "mentor"}))
    },[])
    //
    // console.log(authUser);
    return (
        // <>
        //     <Header />
        //     <Routes>
        //         <Route path="/404" element={<NotFoundPAge/>}/>
        //         <Route path="*" element={<NotFoundPAge/>}/>
        //     </Routes>
        //     {/*<Miki/>*/}
        //     {/*<Iryna/>*/}
        //     {/*<SashaComp/>*/}
        // {/*<Vitalii/>*/}
        // </>
        <>
            <Header/>
            <Routes>
                {/*<Route path={AppRoutes.MENTOR} element={<MentorContainerPage/>}/>*/}
                <Route path={AppRoutes.Solomiya} element={<Solomiya/>}/>
                <Route path={AppRoutes.Iryna} element={<Iryna/>}/>
                <Route path={AppRoutes.MAIN} element={<h1>Main</h1>}/>
                <Route path={AppRoutes.Sasha} element={<SashaComp/>}/>
                <Route path={AppRoutes.Vitalii} element={<Vitalii/>}/>
                <Route path={AppRoutes.NATALIA} element={<NataliaComponent/>}/>
                <Route path={AppRoutes.NataliaKoziar} element={<NataliaKoziarComponent/>}/>
                <Route path={AppRoutes.CONSULT} element={<ConsultContainer/>}/>
                {/*<Route path={AppRoutes.HOC} element={<HOC Component={<h1>COMPONENT argument</h1>} a={12}/>}/>*/}
                <Route path={AppRoutes.MENTOR} element={
                    <MentorRoute authUser={authUser} Component={MentorContainerPage}/>
                }/>
                <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPAge/>}/>
                <Route path={AppRoutes.Ihor} element={<IhorComponent/>}/>
                <Route path={AppRoutes.Andrew} element={<AndrewComponent/>}/>
                <Route path={AppRoutes.AXIOS} element={<AxiosPage/>}/>
                <Route path={AppRoutes.newAxios} element={<NewAxiosPage/>}/>
                <Route path="*" element={<NotFoundPAge/>}/>
            </Routes>
        </>
    );
}

export default App;
