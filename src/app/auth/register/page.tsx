import React from 'react'
import styles from './Register.module.scss';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import Link from 'next/link';


const RegisterPage = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Registration</h1>
                <RegisterForm />
                <div className={styles.no__acc}>
                    <p>Already have account?</p>
                    <Link className={styles.link} href='/auth/login'>Log in</Link>
                </div>
            </div>
        </main>
    )
}

export default RegisterPage;