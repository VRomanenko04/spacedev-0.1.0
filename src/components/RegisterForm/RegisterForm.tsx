'use client'
import React from 'react';
import styles from './RegisterForm.module.scss';
import Input from '../Input/Input';
import Button from '../UI/Button/Button';
import useRegisterForm from '@/hooks/RegisterForm.hook';
import { validate } from './RegisterFormValidate';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    confPassword: ''
};

const RegisterForm = () => {
    const { handleChange, handleSubmit, values, errors } = useRegisterForm(
        INITIAL_STATE,
        validate
    );

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.top__block}>
                <div className={styles.avatar}></div>
                <div className={styles.inputs__position}>
                    <Input 
                        type='text'
                        labetText='Username'
                        inputId='username'
                        handleChange={handleChange}
                        value={values.username}
                        isShort
                    />
                    <Input 
                        type='password'
                        labetText='Password'
                        inputId='password'
                        handleChange={handleChange}
                        value={values.password}
                        isShort
                    />
                </div>
                <div className={styles.inputs__position}>
                    <Input 
                        type='email'
                        labetText='Email'
                        inputId='email'
                        handleChange={handleChange}
                        value={values.email}
                    />
                    <Input 
                        type='password'
                        labetText='Confirm password '
                        inputId='confPassword'
                        handleChange={handleChange}
                        value={values.confPassword}
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