import React, { useState } from 'react';
import styles from './Input.module.scss';

type InputProps = {
    type: string
    inputId: string
    labetText?: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

const Input = (props: InputProps) => {
    return (
        <label>
            <p className={styles.label__text}>{props.labetText}</p>
            <input 
                className={styles.input} 
                type={props.type} 
                id={props.inputId} 
                value={props.value}
                onChange={props.handleChange}
            />
        </label>
    )
}

export default Input;