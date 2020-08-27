import React from "react";
import me from '../assets/me.jpg';
import styles from './MainPage.module.scss';
import MenuBarComponent from "../components/menuBar/MenuBarComponent";

export default function MainPage() {
    return(
            <div className={styles.container}>
                <div className={styles.background}>
                    <div className={styles.left}/>
                    <div className={styles.right}/>
                </div>
                <MenuBarComponent/>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <div className={styles.red}>Hi!</div>
                        <div className={styles.hi}>
                            I am <span className={styles.name}>Sofia</span>
                        </div>
                        <div>A Web Developer, who is
                            passionate about graphics and visuals. Searching myself in webGL</div>
                    </div>
                    <img  className={styles.image} src={me}/>
                </div>
            </div>
    );
}
