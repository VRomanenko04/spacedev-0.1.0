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

    const BarVariants = {
        hidden: { scaleY: 0 },
        visible: { scaleY: 1 }
    };

    const TextVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    }

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
                style={{ originY: 1 }}
                animate={hasAnimated ? 'visible' : 'hidden'}
                variants={BarVariants}
                transition={{ duration: 0.5, delay: 0.15 }}
            ></motion.div>
            <motion.div 
                className={styles.content}
                ref={ref}
                animate={hasAnimated ? 'visible' : 'hidden'}
                variants={TextVariants}
                transition={{ duration: 0.5, delay: 0.15 }}
            >
                <h2>{props.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: props.text }} />
            </motion.div>
        </div>
    )
}

export default TextParagraph;