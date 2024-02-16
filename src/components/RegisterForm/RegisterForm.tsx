'use client'
import React from 'react';
import styles from './RegisterForm.module.scss';
import Input from '../Input/Input';
import Button from '../UI/Button/Button';
import useRegisterForm from '@/hooks/RegisterForm.hook';
import { validateRegister } from './RegisterFormValidate';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    confPassword: ''
};

const RegisterForm = () => {
    const { handleChange, handleSubmit, values, errors } = useRegisterForm(
        INITIAL_STATE,
        validateRegister
    );

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.top__block}>
                <div className={styles.avatar}></div>
                <div className={styles.inputs__position}>
                    <div className={styles.input__box}>
                        <Input 
                            type='text'
                            labetText='Username'
                            inputId='username'
                            handleChange={handleChange}
                            value={values.username}
                            isError={errors.username}
                            isShort
                        />
                        {errors.username && (
                            <p className={styles.error}>{errors.username}</p>
                        )}
                    </div>
                    <div className={styles.input__box}>
                        <Input 
                            type='password'
                            labetText='Password'
                            inputId='password'
                            handleChange={handleChange}
                            value={values.password}
                            isError={errors.password}
                            isShort
                        />
                        {errors.password && (
                            <p className={styles.error}>{errors.password}</p>
                        )}
                    </div>
                </div>
                <div className={styles.inputs__position}>
                    <div className={styles.input__box}>
                        <Input 
                            type='email'
                            labetText='Email'
                            inputId='email'
                            handleChange={handleChange}
                            value={values.email}
                            isError={errors.email}
                        />
                        {errors.email && (
                            <p className={styles.error}>{errors.email}</p>
                        )}
                    </div>
                    <div className={styles.input__box}>
                        <Input 
                            type='password'
                            labetText='Confirm password '
                            inputId='confPassword'
                            handleChange={handleChange}
                            value={values.confPassword}
                            isError={errors.confPassword}
                        />
                        {errors.confPassword && (
                            <p className={styles.error}>{errors.confPassword}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.bottom__block}>
                <Button extraClass={styles.btn} buttonText='Submit' type='submit'/>
            </div>
        </form>
    )
}

export default RegisterForm;