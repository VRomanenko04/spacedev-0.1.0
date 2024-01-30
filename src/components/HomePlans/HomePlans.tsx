import React from 'react';
import styles from './HomePlans.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '../../assets/right-arrow.svg';

const basicFunctions = ['Access to the main story', 'Saving completed material', 'Obtaining electronic certificates', 'Basic tips for passing'];
const ultraFunctions = ['Access to the main story', 'Saving completed material', 'Obtaining electronic certificates', 'Basic tips for passing', 'Plot thread for preparing for an interview', "Several ready-made author's (made by you) projects after completing each of the storylines"];


const HomePlans = () => {
    return (
        <section className={styles.container}>
            <div className={styles.info__block}>
                <div>
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
                <div className={styles.link__section}>
                    <Link className={styles.link} href='/plans'>
                        <p>Learn more</p>
                        <Image src={Arrow} alt='arrow btn'/>
                    </Link>
                </div>
            </div>

            <div className={styles.info__block}>
                <div>
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
                <div className={styles.link__section}>
                    <Link className={styles.link} href='/plans'>
                        <p>Learn more</p>
                        <Image src={Arrow} alt='arrow btn'/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomePlans;