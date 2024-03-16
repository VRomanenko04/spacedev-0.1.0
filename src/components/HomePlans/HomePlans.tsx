import React from 'react';
import LinkButton from '../UI/LinkButton/LinkButton';
import BasicIcon from '@/assets/basic-plan-illustration.svg';
import UltraIcon from '@/assets/ultra-plan-illustration.svg';
import styles from './HomePlans.module.scss';
import Image from 'next/image';

const basicFunctions = ['Access to the main story', 'Saving completed material', 'Obtaining electronic certificates', 'Basic tips for passing'];
const ultraFunctions = ['Access to the main story', 'Saving completed material', 'Obtaining electronic certificates', 'Basic tips for passing', 'Plot thread for preparing for an interview', "Several ready-made author's (made by you) projects after completing each of the storylines"];


const HomePlans = () => {
    return (
        <section className={styles.container}>
            <div className={styles.info__block}>
                <div>
                    <Image src={BasicIcon} alt='Basic plan illustration' className={styles.image}/>
                    <div className={`${styles.title__basic} ${styles.title}`}>
                        <h5>BASIC</h5>
                        <p>12.99$</p>
                    </div>
                    <div>
                        <ul className={styles.list}>
                            {basicFunctions.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.btn__section}>
                    <LinkButton
                        extraClass={styles.btn}
                        textAnimateClass={styles.btn__hover}
                        linkHref='/auth/register'
                        linkText='Get started'
                    />
                </div>
            </div>

            <div className={styles.info__block}>
                <div>
                    <Image src={UltraIcon} alt='Ultra plan illustration' className={styles.image}/>
                    <div className={`${styles.title__ultra} ${styles.title}`}>
                        <h5>ULTRA</h5>
                        <p>19.99$</p>
                    </div>
                    <div>
                        <ul className={styles.list}>
                            {ultraFunctions.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.btn__section}>
                    <LinkButton
                        extraClass={styles.btn}
                        textAnimateClass={styles.btn__hover}
                        linkHref='/auth/register'
                        linkText='Get started'
                    />
                </div>
            </div>
        </section>
    )
}

export default HomePlans;