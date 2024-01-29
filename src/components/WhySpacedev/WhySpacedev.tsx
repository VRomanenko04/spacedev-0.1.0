import React from 'react';
import styles from './WhySpacedev.module.scss';
import Image from 'next/image';
import Moonwalker from '../../assets/moonwalker.png';
import TextParagraph from '../UI/TextParagraph/TextParagraph';


const WhySpacedev = () => {
    return (
        <section className={styles.container}>
            <div className={styles.img__block}>
                <Image src={Moonwalker} alt='Moonwalker'/>
            </div>
            <div className={styles.info__block}>
                <h2 className={styles.title}>Why you should choose - SPACEDEV?</h2>
                <TextParagraph 
                    title='Unique Learning Method'
                    text='<h3>We combine engaging gameplay with deep programming knowledge to make learning fun and rewarding.</h3>'
                />
                <TextParagraph 
                    title='Availability'
                    text='<h3>Our courses are available online, which allows you to study from anywhere in the world, and is also much cheaper than most competitors who provide even simple text courses.</h3>'
                />
                <TextParagraph 
                    title='Hands-on Experience'
                    text='<h3>Our courses emphasize hands-on experience, allowing students to practice coding immediately after gaining knowledge.</h3>'
                />
                <TextParagraph 
                    title='Interactive Activities'
                    text='<h3>We provide learning materials in a variety of formats, including interactive story-based activities and AI-generated activities.</h3>'
                />
            </div>
        </section>
    )
}

export default WhySpacedev;