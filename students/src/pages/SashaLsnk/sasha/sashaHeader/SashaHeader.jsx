import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styles from "../sashaHeader/SashaHeader.module.css";
// import { RedirectRoutes, SashaRoutes } from "../../../common/routes/AppRoutes";

import SashaCV from "../sashaCV/SashaCV";
import SashaLift from "../sashaLiftState/SashaLift";
import SashaComp from "../sashaComponent/SashaComp";
import InputsParent from "../sashaInputs/inputsParent";
import FormsParent from "../sashaForms/FormsParent";

const MainSashaHeader = () => 
(
    <>
      <h1 style={{ textAlign: "center", backgroundColor: "lavender" }}>
        Sasha's Page
      </h1>

      {/*<div className={styles.container}>*/}

    {/*  <Link to={`${RedirectRoutes.SASHA}${SashaRoutes.COMP}`}>*/}
    {/*      <span>Component</span>*/}
    {/*    </Link>*/}

    {/*    <Link to={`${RedirectRoutes.SASHA}${SashaRoutes.CV}`}>*/}
    {/*      <span>CV</span>*/}
    {/*    </Link>*/}

    {/*    <Link to={`${RedirectRoutes.SASHA}${SashaRoutes.LIFT}`}>*/}
    {/*      <span>Lift State</span>*/}
    {/*    </Link>*/}

    {/*    <Link to={`${RedirectRoutes.SASHA}${SashaRoutes.INPUTS}`}>*/}
    {/*      <span>Inputs</span>*/}
    {/*    </Link>*/}

    {/*    <Link to={`${RedirectRoutes.SASHA}${SashaRoutes.FORM}`}>*/}
    {/*      <span>Form</span>*/}
    {/*    </Link>*/}
    {/*    */}
    {/*  </div>*/}

    {/*  <Routes>*/}
    {/*  <Route path={SashaRoutes.MAIN} element={<MainSashaHeader />} /> */}
    {/*  <Route path={SashaRoutes.CV} element={<SashaCV />} />*/}
    {/*  <Route path={SashaRoutes.LIFT} element={<SashaLift />} />*/}
    {/*  <Route path={SashaRoutes.COMP} element={<SashaComp />} />*/}
    {/*  <Route path={SashaRoutes.INPUTS} element={<InputsParent />} />*/}
    {/*  <Route path={SashaRoutes.FORM} element={<FormsParent />} />*/}
    {/*  */}
    {/*  */}


    {/*</Routes>*/}


    </>
  );


export default MainSashaHeader;
