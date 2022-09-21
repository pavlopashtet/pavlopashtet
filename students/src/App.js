import './App.css';
// import Sasha from "./components/Sasha/Sasha";
// import IhorComponent from "./components/Ihor/Ihor";
import Iryna from './pages/Iryna/Iryna';
import SashaComp from "./pages/SashaLsnk/lysenko.jsx"
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import NotFoundPAge from "./pages/404/NotFoundPAge";
import MainPage from "./pages/Main/MainPage";
import { AppRoutes } from "./common/Routes";
import { useEffect } from "react";
import Solomiya from "./pages/Solomiya/Solomiya.jsx";
import Vitalii from "./pages/Vitalii/Vitalii";
import Con from "./pages/Iryna/CV/CV"
import MentorContainerPage from "./pages/Mentor/MentorContainerPage";
import IhorComponent from "./pages/Ihor/Ihor";


const App = () => {
    return (
//         <>
//             <Header />
//             <Routes>
//                 <Route path="/404" element={<NotFoundPAge/>}/>
//                 <Route path="*" element={<NotFoundPAge/>}/>
//             </Routes>
//             {/*<Miki/>*/}
//             {/*<Iryna/>*/}
//             {/*<SashaComp/>*/}
//         </>
<>            
<Header/>
            <Routes>

                <Route path={AppRoutes.MENTOR} element={<MentorContainerPage />}/>
                <Route path={AppRoutes.Solomiya} element={<Solomiya/>}/>

                <Route path={AppRoutes.MAIN} element={<h1>Main</h1>}/>
                {/*<Route path={AppRoutes.HOC} element={<HOC Component={<h1>COMPONENT argument</h1>} a={12}/>}/>*/}
                {/*<Route path={AppRoutes.MENTOR} element={*/}
                {/*    <MentorRoute authUser={authUser} Component={MentorContainerPage}/>*/}
                {/*}/>*/}
                <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPAge/>}/>
                <Route path={AppRoutes.Ihor} element={<IhorComponent/>}/>
                <Route path="*" element={<NotFoundPAge/>}/>
                <Route path ={AppRoutes.Iryna} element = {<Iryna/>}/>  
            </Routes>
</>     
);

}

export default App;



// <Header />

// {/*<Solomiya/>*/}
// {/*<Iryna/>*/}
// {/*<SashaComp/>*/}
{/* <Vitalii/> */}


