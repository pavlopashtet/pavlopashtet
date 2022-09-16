import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../common/Routes";

const Header = () => (
    <div className={styles.container}>
<Link to={AppRoutes.Ihor}>
    <span style={{fontSize: '20px'}}>Ihor</span>
</Link>
    </div>
);

export default Header;
