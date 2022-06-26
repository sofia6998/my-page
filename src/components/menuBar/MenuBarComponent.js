import React from "react";
import styles from "./MenuBarComponent.module.scss";
import { Link, useHistory } from "react-router-dom";
import Inst from "../icons/Inst";
import Ln from "../icons/Ln";
import Mail from "../icons/Mail";
import Github from "../icons/Github";

export default function MenuBarComponent({active}) {
    return(
        <>
            <div className={styles.social}>
                <a href="https://www.instagram.com/sofy_plate/" target="_blank" rel="noopener noreferrer" title={"Instagram"}>
                    <Inst />
                </a>
                <a href="https://www.linkedin.com/in/sofia-nagavkina-4136b8194/" target="_blank" rel="noopener noreferrer" title={"LinkedIn"}>
                    <Ln />
                </a>
                <a href="https://github.com/sofia6998" target="_blank" rel="noopener noreferrer" title={"GitHub"}>
                    <Github />
                </a>
                <a href="mailto:sofia_nag@bk.ru" target="_blank" title="Mail">
                    <Mail />
                </a>
            </div>
            <div className={styles.menuContainer}>
                <Link to="/"
                      className={styles.link}
                      activeClassName={styles.active}>
                    Home
                </Link>
                <Link to="/illustrations"
                      className={styles.link}
                      activeClassName={styles.active}>
                    Illustrations
                </Link>
                <Link to="/about"
                      className={styles.link}
                      activeClassName={styles.active}>
                    About
                </Link>
            </div>
        </>

    );
}
