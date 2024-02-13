import React from 'react';
import styles from './HomeImage.module.css'; 
import mainimage from '../assets/mainimage.png';
import image from '../assets/3Dimage.png';
import maintext from '../assets/maintext.png';
import { TbHandClick } from "react-icons/tb";

const HomeImage = () => {
    return (
        <div className={styles.HomeImagebody}>
            <div className={styles.card}> 
                <div className={styles.wrapper}>
                    <img src={mainimage} alt="Dark Rider Cover" className={styles['cover-image']} /> 
                </div>
                <img src={maintext} alt="Dark Rider Title" className={styles.title} /> 
                <img src={image} alt="Dark Rider Character" className={styles.character} />
            </div>
        </div>
    );
};

export default HomeImage;
