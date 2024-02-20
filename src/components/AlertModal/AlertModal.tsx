'use client'
import React from 'react';
import styles from './AlertModal.module.scss';
import Image from 'next/image';
import CheckMark from '@/assets/checkmark_icon.svg';
import CrossIcon from '@/assets/cross_icon.svg';
import { AnimatePresence, motion } from 'framer-motion';

interface IAlert {
    messageHead: string
    messageText?: string
    isConfirmed: boolean
    isVisible: boolean
}

const confirmContainer = `${styles.container} ${styles.confirm}`;
const errorContainer = `${styles.container} ${styles.error}`;

const AlertModal = ({ messageHead, messageText, isConfirmed, isVisible }: IAlert) => {
    return (
        <div className={styles.modal__wrapper}>
            <AnimatePresence initial={false}>
                {isVisible && (
                    <motion.div
                        className={isConfirmed ? confirmContainer : errorContainer}
                        initial={{ y: 0 }}
                        animate={{ y: 300 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                            type: "spring",
                            stiffness: '50'
                        }}
                    >
                        {!isConfirmed ? (
                            <Image src={CrossIcon} alt='red cross mark' height={40} />
                        ) : (
                            <Image src={CheckMark} alt='green check mark' height={40} />
                        )}
                        <div>
                            <h6>{messageHead}</h6>
                            <p>{messageText}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default AlertModal;