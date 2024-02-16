import React from 'react';
import styles from './Input.module.scss';

type InputProps = {
    type: string
    inputId: string
    labetText?: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    isError?: string
    isShort?: boolean
}

const Input = (props: InputProps) => {
    const inputStyle = props.isError?.length != undefined && props.isError?.length > 0 ? `${styles.input} ${styles.error}` : `${styles.input}`;

    return (
        <label>
            <p className={styles.label__text}>{props.labetText}</p>
            <input 
                className={`${props.isShort ? styles.input__short : styles.input} ${inputStyle}`} 
                type={props.type} 
                id={props.inputId} 
                value={props.value}
                onChange={props.handleChange}
            />
        </label>
    )
}

export default Input;