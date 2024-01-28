import React from 'react';
import styles from './TextParagraph.module.scss';

type TextProps = {
    title: string
    text: string
    animationClass?: string
}

const TextParagraph = (props: TextProps) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.bar} ${props.animationClass}`}></div>
            <div className={styles.content}>
                <h2>{props.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: props.text }} />
            </div>
        </div>
    )
}

export default TextParagraph;