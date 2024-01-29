import React from 'react';
import styles from './HomeHeader.module.scss';
import Button from '../UI/Button/Button';
import SocialIcons from '../UI/SocialIcons/SocialIcons';
import TextParagraph from '../UI/TextParagraph/TextParagraph';

const HomeHeader = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.small__title}>&lt;start your way in coding by playing/&gt;</h1>
                <h1 className={styles.title}>SPACEDEV</h1>
                <div className={styles.btns}>
                    <Button 
                        buttonText='Log in' 
                        extraClass={styles.login__btn} 
                        textAnimateClass={styles.login__hover}
                    />
                    <Button 
                        buttonText='Register' 
                        extraClass={styles.register__btn} 
                        textAnimateClass={styles.register__hover}
                    />
                </div>
                <SocialIcons extraClass={styles.social__position}/>
            </div>
            <TextParagraph 
                title='What is Spacedev?'
                text='<h3>SpaceDev is a unique educational space where programming becomes an exciting adventure.<br/> 
                We offer innovative, game-based programming courses that immerse students in the exciting worlds of code and technology.</h3>'
            />
        </section>
    )
}

export default HomeHeader;