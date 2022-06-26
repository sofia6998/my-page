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
                    <div className={styles.red}>Frontend developer with a fullstack experience.</div>
                    <br/>
                    I like to apply my math knowledge to implement beautiful UI effects, animations and graphs.
                    Also passionate about generative art and started to dig into data visualisation lately.
                    <br/>
                    <br/>
                    In free time do sport activities and create different handmade stuff. Was engaged in winter sports(skiing, snowboarding) since 3 years old.
                    <br/>
                    <br/>
                    Finished M. C. S. at <a href="https://en.itmo.ru/">ITMO University</a>.
                </div>
                <img  className={styles.image} src={me}/>
            </div>
        </div>
    );
}
