import React from 'react';
import styles from './Input.module.scss';

type InputProps = {
    type: string
    labetText?: string
}

const Input = (props: InputProps) => {
    return (
        <label>
            <p className={styles.label__text}>{props.labetText}</p>
            <input className={styles.input} type={props.type} />
        </label>
    )
}

export default Input;