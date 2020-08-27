import React from "react";
import styles from "./IllustrationsPage.module.scss";
import MenuBarComponent from "../components/menuBar/MenuBarComponent";
import sr1 from "../assets/sr1.png";
import sr2 from "../assets/sr2.png";
import sr3 from "../assets/sr3.png";
import sr4 from "../assets/sr4.png";
import sr5 from "../assets/sr5.png";
import sr6 from "../assets/sr6.png";
import sr7 from "../assets/sr7.png";
import itog1 from "../assets/itog1.png";
import itog2 from "../assets/itog2.png";
import IllustrationCard from "../components/card/IllustrationCard";

export default function IllustrationsPage() {
    return(
        <div className={styles.container}>
            <MenuBarComponent/>
            <div className={styles.infoContainer}>
                <IllustrationCard image={itog1} image2={itog2} title={"Me, Myself and I"}/>
                <IllustrationCard image={sr1} title={"Blue-footed booby"} text={"Did you know that birds with blue legs exist? Maybe they are aliens..."}/>
                <IllustrationCard image={sr3} title={"Lodi"} text={"My beloved dog watching fighter aircraft."}/>
                <IllustrationCard image={sr7} title={"Some time"} text={"..."}/>
                <IllustrationCard image={sr5} title={"Ma Sis"} text={"If you don't understand how a girl can both love her sister and want to wring a neck at the same time, you were probably the only child."}/>
                <IllustrationCard image={sr6} title={"Pinguin"} text={"Inspired by TRÜF Creative"}/>
                <IllustrationCard image={sr2} title={"The moon"} text={"A logo for my friends representing a swamp of sleep."}/>
                <IllustrationCard image={sr4} text={"Calm and silent.."}/>
            </div>
        </div>
    );
}
