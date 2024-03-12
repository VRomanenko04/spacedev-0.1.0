'use client'
import React, { useState } from 'react'
import styles from './Register.module.scss';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import Link from 'next/link';
import AlertModal from '@/components/UI/AlertModal/AlertModal';


const RegisterPage = () => {
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
                <h1 className={styles.title}>Registration</h1>
                <RegisterForm 
                    setIsConformed={setIsConformed}
                    showModal={showModal}
                />
                <div className={styles.no__acc}>
                    <p>Already have account?</p>
                    <Link className={styles.link} href='/auth/login'>Log in</Link>
                </div>
            </div>
            <AlertModal 
                isConfirmed={isConfirmed} 
                messageHead={isConfirmed ? 'Registration Confirmed!' : 'Registration Error!'} 
                isVisible={isVisible}
            />
        </main>
    )
}

export default RegisterPage;