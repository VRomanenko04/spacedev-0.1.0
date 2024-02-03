import React from 'react'
import styles from './Login.module.scss';
import Link from 'next/link';
import LoginForm from '@/components/LoginForm/LoginForm';


const LoginPage = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Log in</h1>
                <LoginForm />
                <div className={styles.no__acc}>
                    <p>No acc?</p>
                    <Link className={styles.link} href='/auth/register'>Register</Link>
                </div>
            </div>
        </main>
    )
}

export default LoginPage;