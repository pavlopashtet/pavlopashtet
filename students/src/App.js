import './App.css';
import Iryna from './pages/Iryna/Iryna';
import { Routes, Route } from "react-router-dom";
import NotFoundPAge from "./pages/404/NotFoundPAge";
import { AppRoutes } from "./common/Routes";
import MentorContainerPage from "./pages/Mentor/MentorContainerPage";
// import HOC from "./components/HOC/HOC";
import { useEffect } from "react";
import NataliaComponent from "./pages/Natalia/Natalia";
import Andrian from "./pages/Andrian/Andrian.jsx";
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
import StepanRudiak from "./pages/StepanRudiak";
import Header from "./components/header/Header";
import { MentorRoute } from "./components/HOC/MentorRoute";
import Login from "./pages/Login/LOgin";
import SignUp from "./pages/SignIn/SignIn";
import { EnterTypes } from "./common/Types";
import IrynaNestorko from "./pages/IrynaNest";



const App = () => {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    const admin = JSON.parse(localStorage.getItem("user"));
    console.log(authUser)
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

                <Route path={AppRoutes.Andrian} element={<Andrian/>}/>
                <Route path={AppRoutes.Solomiya} element={<Solomiya/>}/>
                <Route path={AppRoutes.Iryna} element={<Iryna/>}/>
                <Route path={AppRoutes.MAIN} element={<h1>Main</h1>}/>
                <Route path={AppRoutes.LOGIN} element={<SignUp page={EnterTypes.SIGN_IN}/>}/>
                <Route path={AppRoutes.SIGN_UP} element={<SignUp page={EnterTypes.SIGN_UP}/>}/>
                <Route path={AppRoutes.CV} element={<h1>CV</h1>}/>
                <Route path={AppRoutes.Admin} element={<h1>Admin</h1>}/>


                <Route path={AppRoutes.Sasha} element={<SashaComp/>}/>
                <Route path={AppRoutes.Vitalii} element={<Vitalii/>}/>
                <Route path={AppRoutes.NATALIA} element={<NataliaComponent/>}/>
                <Route path={AppRoutes.NataliaKoziar} element={<NataliaKoziarComponent/>}/>
                <Route path={AppRoutes.CONSULT} element={<ConsultContainer/>}/>
                <Route path={AppRoutes.MENTOR} element={
                    <MentorRoute authUser={authUser} Component={MentorContainerPage}/>
                }/>
                <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPAge/>}/>
                <Route path={AppRoutes.Ihor} element={<IhorComponent/>}/>
                <Route path={AppRoutes.Andrew} element={<AndrewComponent/>}/>
                <Route path={AppRoutes.AXIOS} element={<AxiosPage/>}/>
                <Route path={AppRoutes.newAxios} element={<NewAxiosPage/>}/>
                <Route path={AppRoutes.StepanRudiak} element={<StepanRudiak/>}/>
                {/* <Route path={AppRoutes.IrynaNestorko} element={<IrynaNestorko/>}/> */}
                <Route path="*" element={<NotFoundPAge/>}/>

            </Routes>
        </>
    );
}

export default App;
