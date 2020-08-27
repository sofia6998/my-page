import React from "react";
import styles from "./MenuBarComponent.module.scss";
import { Link, useHistory } from "react-router-dom";

export default function MenuBarComponent({active}) {
    return(
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
    );
}
