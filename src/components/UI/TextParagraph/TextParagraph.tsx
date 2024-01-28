'use client'
import React, { useRef } from 'react';
import styles from './TextParagraph.module.scss';
import { motion, useInView } from 'framer-motion';

type TextProps = {
    title: string
    text: string
}

const TextParagraph = (props: TextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const variants = {
        hidden: { height: 0 },
        visible: { height: 130 }
    };

    return (
        <div className={styles.container}>
            <motion.div 
                ref={ref}
                className={`${styles.bar}`}
                animate={isInView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 0.5 }}
            ></motion.div>
            <div className={styles.content}>
                <h2>{props.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: props.text }} />
            </div>
        </div>
    )
}

export default TextParagraph;