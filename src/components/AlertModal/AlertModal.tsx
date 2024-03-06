'use client'
import React, { useEffect, useState } from 'react';
import styles from './AlertModal.module.scss';
import Image from 'next/image';
import CheckMark from '@/assets/checkmark_icon.svg';
import CrossIcon from '@/assets/cross_icon.svg';
import WhiteCrossIcon from '@/assets/white-cross.svg';
import { AnimatePresence, motion } from 'framer-motion';

interface IAlert {
    messageHead: string
    isConfirmed: boolean
    isVisible: boolean
}

const confirmContainer = `${styles.container} ${styles.confirm}`;
const errorContainer = `${styles.container} ${styles.error}`;

const AlertModal = ({ messageHead, isConfirmed, isVisible }: IAlert) => {
    const [isClose, setIsClose] = useState(false);
    
    const handleClose = () => {
        setIsClose((prev) => !prev);
    }

    useEffect(() => {
        if(isClose) {
            setTimeout(() => {
                setIsClose(false)
            }, 1000)
        }
    }, [handleClose]);

    return (
        <div className={styles.modal__wrapper}>
            <AnimatePresence initial={false}>
                {isVisible && (
                    <motion.div
                        className={isConfirmed ? confirmContainer : errorContainer}
                        style={isClose ? {opacity: 0} : {opacity: 1}}
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
                        <div className={styles.container__content}>
                            {!isConfirmed ? (
                                <Image src={CrossIcon} alt='red cross mark' height={30} />
                            ) : (
                                <Image src={CheckMark} alt='green check mark' height={30} />
                            )}
                            <div>
                                <p 
                                    className={styles.message} 
                                    style={!isConfirmed ? {color: '#EA113F'} : {color: '#24F58D'}}
                                >{messageHead}</p>
                            </div>
                        </div>
                        <div>
                            <Image onClick={handleClose} className={styles.close__icon} src={WhiteCrossIcon} alt='white cross clickble icon' height={11}/>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default AlertModal;