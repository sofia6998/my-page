import React, {useState} from "react";
import styles from './IllustrationCard.module.scss';

export default function IllustrationCard({image, title, text, image2}) {
    const [isLarge, setLarge] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer} onClick={() => setLarge(true)}>
                {image2 && <img className={styles.pic2} src={image2}/>}
                <img className={styles.pic} src={image}/>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>{title || 'No name'}</div>
                <div>{text || ''}</div>
            </div>
            {isLarge && <div className={styles.overlay} onClick={() => setLarge(false)}>
                    {image2 && <img className={styles.pic2} src={image2}/>}
                    <img className={styles.pic} src={image}/>
            </div>}
        </div>
    );
}
