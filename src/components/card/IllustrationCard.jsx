import React from "react";
import styles from './IllustrationCard.module.scss';

export default function IllustrationCard({image, title, text}) {
    return (
        <div className={styles.container}>
            <img className={styles.pic} src={image}/>
            <div className={styles.info}>
                <div className={styles.title}>{title || 'No name'}</div>
                <div>{text || ''}</div>
            </div>
        </div>
    );
}
