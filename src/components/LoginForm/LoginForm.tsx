import React from 'react'
import Input from '../Input/Input'
import Button from '../UI/Button/Button'
import styles from './LoginForm.module.scss';

type FormProps = {
    formFunc: () => void
}

const LoginForm = ({ formFunc }: FormProps) => {
    return (
        <form className={styles.form} onSubmit={formFunc}>
            <div>
                <Input type='email' labetText='Email'/>
                <Input type='password' labetText='Password'/>
            </div>
            <Button buttonText='Submit' extraClass={styles.btn}/>
        </form>
    )
}

export default LoginForm;