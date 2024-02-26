'use client'
import React from 'react';
import styles from './AccountProfileBlock.module.scss';
import Image from 'next/image';
import Pen_icon from '../../assets/Pen_icon.svg';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';


const AccountProfileBlock = () => {
    const {username, userId, email} = useSelector((state: RootState) => state.userDataReducer);

    return (
        <section className={styles.container}>
            <div className={styles.info__section}>
                <div className={styles.title__container}>
                    <h3 className={styles.title}>Profile</h3>
                    <p className={styles.edit}>Edit <Image className={styles.pen} src={Pen_icon} alt='White pen icon'/></p>
                </div>
                <div className={styles.userinfo__container}>
                    <p className={styles.pen}><strong>{username}</strong> #{userId}</p>
                    <p>{email}</p>
                </div>
            </div>
            <div className={styles.avatar}>
                {/* Компонент выбора аватара */}
            </div>
        </section>
    )
}

export default AccountProfileBlock;