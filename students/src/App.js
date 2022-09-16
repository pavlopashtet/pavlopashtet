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

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path={AppRoutes.Ihor} element={<IhorComponent/>}/>
                <Route path="/404" element={<NotFoundPAge/>}/>
                <Route path="*" element={<NotFoundPAge/>}/>
            </Routes>
            {/*<Miki/>*/}
            {/*<Iryna/>*/}
            {/*<SashaComp/>*/}
        </>
    );
}

export default App;
