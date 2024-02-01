import React from 'react';
import Image from 'next/image';
import styles from './GamePreview.module.scss';
import TopImage from '../../assets/top.svg';
import BottomImage from '../../assets/bottom.svg';


const GamePreview = () => {
    return (
        <section className={styles.container}>
            <Image src={TopImage} alt='Location of the orange planet' className={styles.top__location}/>
            <div className={styles.preview__container}></div>
            <Image src={BottomImage} alt='Location of the ice planet' className={styles.bottom__location}/>
        </section>
    )
}

export default GamePreview;