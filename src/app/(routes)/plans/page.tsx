import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './PlanPage.module.scss';
import arrow from '@/assets/right-arrow.svg';
import SubscribePlans from '@/components/SubscribePlans/SubscribePlans';


const PlanPage = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <SubscribePlans />
            </div>
            <Link href='account'>
                    <div className={styles.btn}>
                        <Image src={arrow} alt='right white arrow' className={styles.arrow}/>
                    </div>
            </Link>
        </main>
    )
}

export default PlanPage;