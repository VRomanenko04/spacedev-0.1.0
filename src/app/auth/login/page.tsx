import React from 'react'
import styles from './Login.module.scss';
import Button from '@/components/UI/Button/Button';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Log in</h1>
                <form className={styles.form}>
                    <div>
                        <label>
                            <p className={styles.label__text}>Email</p>
                            <input className={styles.input} type="text" />
                        </label>
                        <label>
                            <p className={styles.label__text}>Password</p>
                            <input className={styles.input} type="text" />
                        </label>
                    </div>
                    <Button buttonText='Submit' extraClass={styles.btn}/>
                </form>
                <div className={styles.no__acc}>
                    <p>No acc?</p>
                    <Link className={styles.link} href='/auth/register'>Register</Link>
                </div>
            </div>
        </main>
    )
}

export default LoginPage;