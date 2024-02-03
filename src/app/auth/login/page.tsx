import React from 'react'
import styles from './Login.module.scss';
import Button from '@/components/UI/Button/Button';
import Link from 'next/link';
import Input from '@/components/Input/Input';

const LoginPage = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Log in</h1>
                <form className={styles.form}>
                    <div>
                        <Input type='email' labetText='Email'/>
                        <Input type='password' labetText='Password'/>
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