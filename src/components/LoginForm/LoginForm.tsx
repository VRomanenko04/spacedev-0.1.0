'use client'
import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../UI/Button/Button'
import styles from './LoginForm.module.scss';
import { LoginUser } from '@/services/LoginService';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/lib/redux/store';

export type AlertFormProps = {
    showModal: () => void
    setIsConformed: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm = ({ showModal, setIsConformed }: AlertFormProps) => {
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    // redirect если user auth
    const isAuth = useSelector((state: RootState) => state.authReducer.isAuthenticated);
    const router = useRouter();
    if(isAuth) {
        setTimeout(() => {
            router.push('/account');
        }, 1500)
    } 

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginData);
        LoginUser(dispatch, loginData.email, loginData.password, setIsConformed)
        .then(() => {
            showModal();
            setLoginData({
                email: '',
                password: ''
            })
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