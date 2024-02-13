'use client'

import React, { useState } from 'react';
import styles from './RegisterForm.module.scss';
import Input from '../Input/Input';
import Button from '../UI/Button/Button';
import { RegisterUser } from '@/services/RegisterService';
import { useDispatch } from 'react-redux';


const RegisterForm = () => {
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
        confPassword: ''
    });
    
    const dispatch = useDispatch();

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(registerData);
        RegisterUser(dispatch, registerData.email, registerData.password);

        setRegisterData({
            username: '',
            email: '',
            password: '',
            confPassword: ''
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setRegisterData({
            ...registerData,
            [id]: value
        });
    }

    return (
        <form onSubmit={handleForm} className={styles.form}>
            <div className={styles.top__block}>
                <div className={styles.avatar}></div>
                <div className={styles.inputs__position}>
                    <Input 
                        type='text'
                        labetText='Username'
                        inputId='username'
                        handleChange={handleChange}
                        value={registerData.username}
                        isShort
                    />
                    <Input 
                        type='password'
                        labetText='Password'
                        inputId='password'
                        handleChange={handleChange}
                        value={registerData.password}
                        isShort
                    />
                </div>
                <div className={styles.inputs__position}>
                    <Input 
                        type='email'
                        labetText='Email'
                        inputId='email'
                        handleChange={handleChange}
                        value={registerData.email}
                    />
                    <Input 
                        type='password'
                        labetText='Confirm password '
                        inputId='confPassword'
                        handleChange={handleChange}
                        value={registerData.confPassword}
                    />
                </div>
            </div>
            <div className={styles.bottom__block}>
                <Button extraClass={styles.btn} buttonText='Submit' type='submit'/>
            </div>
        </form>
    )
}

export default RegisterForm;