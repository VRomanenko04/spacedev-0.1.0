'use client'
import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../UI/Button/Button'
import styles from './LoginForm.module.scss';
import { LoginUser } from '@/services/LoginService';


const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginData);
        LoginUser(loginData.email, loginData.password);

        setLoginData({
            email: '',
            password: ''
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setLoginData({
            ...loginData,
            [id]: value
        });
    }

    return (
        <form className={styles.form} onSubmit={handleForm}>
            <div>
                <Input type='email' inputId='email' labetText='Email' handleChange={handleChange} value={loginData.email}/>
                <Input type='password' inputId='password' labetText='Password' handleChange={handleChange} value={loginData.password}/>
            </div>
            <Button buttonText='Submit' extraClass={styles.btn} type='submit'/>
        </form>
    )
}

export default LoginForm;