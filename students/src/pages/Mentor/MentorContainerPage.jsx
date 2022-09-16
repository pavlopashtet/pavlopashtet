import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../common/Routes";
import NotFoundPAge from "../404/NotFoundPAge";
import { MentorRoutes } from "../../common/MentorRoutes";

const MentorContainerPage = () => {
    console.log("mentor");
    return (
        <div>
            <h1 style={{textAlign: "center", backgroundColor: "blue"}}>Header of mentor PAGE</h1>

            <Routes>
                <Route path={MentorRoutes.FIRSTNAME} element={
                    <div>
                        <h3>Firstname</h3>
                        <Routes>
                            <Route path="/fLetter" element={<h3>I</h3>}/>
                            <Route path="/sLetter" element={<h3>H</h3>}/>
                        </Routes>
                    </div>
                }/>
                <Route path={MentorRoutes.LASTNAME} element={<h3>Kurylov</h3>}/>
            </Routes>
        </div>
    )
};

export default MentorContainerPage;