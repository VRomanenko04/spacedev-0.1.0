import React from 'react';
import styles from './Button.module.scss';

type Props = {
    extraClass?: string
    textAnimateClass?: string
    onClickFunc?: React.MouseEventHandler<HTMLButtonElement>
    buttonText: string
    type?: 'submit' | 'reset' | 'button' | undefined
}

const Button = (props: Props) => {
    return (
        <button className={`${styles.UiBtn} ${props.extraClass}`} onClick={props.onClickFunc} type={props.type}>
            <p className={props.textAnimateClass}>{props.buttonText}</p>
        </button>
    )
}

export default Button;