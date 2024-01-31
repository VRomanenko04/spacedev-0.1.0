'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './TextParagraph.module.scss';
import { motion, useInView } from 'framer-motion';

type TextProps = {
    title: string
    text: string
}

const TextParagraph = (props: TextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [hasAnimated, setHasAnimated] = useState(false);

    const variants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isInView]);

    return (
        <div className={styles.container}>
            <motion.div 
                ref={ref}
                className={`${styles.bar}`}
                animate={hasAnimated ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 0.5, delay: 0.15 }}
            ></motion.div>
            <div className={styles.content}>
                <h2>{props.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: props.text }} />
            </div>
        </div>
    )
}

export default TextParagraph;