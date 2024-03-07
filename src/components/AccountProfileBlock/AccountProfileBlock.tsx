'use client'
import React, { useEffect, useState } from 'react';
import styles from './AccountProfileBlock.module.scss';
import Image from 'next/image';
import Pen_icon from '../../assets/Pen_icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { postUserData } from '@/services/PostData';
import { actions as userDataActions } from '@/lib/redux/features/UserData.slice';


const AccountProfileBlock = () => {
    const { username, userId, email } = useSelector((state: RootState) => state.userDataReducer);
    const { uid } = useSelector((state: RootState) => state.authReducer);
    const dispatch = useDispatch();

    const [editableText, setEditableText] = useState(username);
    const [inputValue, setInputValue] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (username) {
            setEditableText(username);
            setInputValue(username);
        }
    }, [username]);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && uid) {
            console.log('progress...');
            postUserData(uid, {username: inputValue})
            .then(() => {
                dispatch(userDataActions.setUserData({username: inputValue}));
            })
            setIsEditing(false);
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.info__section}>
                <div className={styles.title__container} onClick={() => {setIsEditing(true)}}>
                    <h3 className={styles.title}>Profile</h3>
                    <p className={styles.edit}>Edit <Image className={styles.pen} src={Pen_icon} alt='White pen icon'/></p>
                </div>
                <div className={styles.userinfo__container}>
                    <p className={styles.pen}>
                        {isEditing ? (
                            <input 
                                type="text"
                                value={inputValue}
                                onChange={handleTextChange}
                                onKeyDown={handleKeyPress}
                                className={styles.username__input}
                            />
                        ) : (
                            <strong>{editableText} </strong>
                        )}
                        #{userId}
                    </p>
                    <p>{email}</p>
                    <p>Password: ********</p>
                </div>
            </div>
            <div className={styles.avatar}>
                {/* Компонент выбора аватара */}
            </div>
        </section>
    )
}

export default AccountProfileBlock;