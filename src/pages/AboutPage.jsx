import React from "react";
import styles from "./AboutPage.module.scss";
import MenuBarComponent from "../components/menuBar/MenuBarComponent";
import me from "../assets/me.jpg";

export default function AboutPage() {
    return(
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.left}/>
                <div className={styles.right}/>
            </div>
            <MenuBarComponent/>
            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <div>💁‍♀️   Sofia</div>
                    <div>👧  21 y.o.</div>
                    <div>🏠  Russia, Saint Petersburg</div>
                    <div>🏫  ITMO University <br/></div>
                    <div>📧  <a href="mailto:nag.sofia@gmail.com">nag.sofia@gmail.com</a></div>
                    <div>💼  2 years at <a href="https://forasoft.com/">ForaSoft</a> as a developer</div>
                </div>
                <img  className={styles.image} src={me}/>
            </div>
        </div>
    );
}
