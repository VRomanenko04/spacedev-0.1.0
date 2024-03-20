import React from 'react';
import styles from './AccountPage.module.scss';
import AccountPlanView from '@/components/AccountPlanView/AccountPlanView';
import AccountProfileBlock from '@/components/AccountProfileBlock/AccountProfileBlock';
import ManagePlanLink from '@/components/ManagePlanLink/ManagePlanLink';


const Account = () => {
    return (
        <main className={styles.wrapper}>
            <section className={styles.container}>
                <div className={styles.left_side}>
                    <h2>Current subscription</h2>
                    <AccountPlanView />
                    <ManagePlanLink />
                </div>
                <div className={styles.right_side}>
                    <AccountProfileBlock />
                </div>
            </section>
        </main>
    )
}

export default Account;