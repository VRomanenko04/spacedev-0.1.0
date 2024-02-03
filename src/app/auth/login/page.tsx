'use client'

import React, { useState } from 'react'
import styles from './Login.module.scss';
import Link from 'next/link';
import LoginForm from '@/components/LoginForm/LoginForm';

export type LoginData = {
    email: string
    password: string
}

const LoginPage = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        email: '',
        password: ''
    })

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault
        console.log(loginData);
    }

    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Log in</h1>
                <LoginForm 
                    formFunc={handleForm}
                    formStates={setLoginData}
                />
                <div className={styles.no__acc}>
                    <p>No acc?</p>
                    <Link className={styles.link} href='/auth/register'>Register</Link>
                </div>
            </div>
        </main>
    )
}

export default LoginPage;