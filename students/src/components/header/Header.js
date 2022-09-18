import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { AppRoutes, RedirectRoutes } from "../../common/Routes";

const Header = () => (
    <div className={styles.container}>
<Link to= {RedirectRoutes.Iryna}>
    <span style={{fontSize:"50px"}}>IRYNA</span>
</Link>

    </div>
);

export default Header;
