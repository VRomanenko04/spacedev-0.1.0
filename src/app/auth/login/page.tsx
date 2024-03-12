'use client';
import React, { useState } from 'react'
import styles from './Login.module.scss';
import Link from 'next/link';
import LoginForm from '@/components/LoginForm/LoginForm';
import AlertModal from '@/components/UI/AlertModal/AlertModal';


const LoginPage = () => {
    const [isConfirmed, setIsConformed] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const showModal = () => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    };

    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Log in</h1>
                <LoginForm 
                    setIsConformed={setIsConformed}
                    showModal={showModal}
                />
                <div className={styles.no__acc}>
                    <p>No acc?</p>
                    <Link className={styles.link} href='/auth/register'>Register</Link>
                </div>
            </div>
            <AlertModal 
                isConfirmed={isConfirmed} 
                messageHead={isConfirmed ? 'Login Confirmed!' : 'Login Error!'} 
                isVisible={isVisible}
            />
        </main>
    )
}

export default LoginPage;