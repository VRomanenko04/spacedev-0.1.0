'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { actions as userDataActions } from '@/lib/redux/features/UserData.slice';
import { RootState } from '@/lib/redux/store';
import { postUserData } from '@/services/PostData';
import { updatePassword } from '@/services/UpdatePassword';
import Pen_icon from '../../assets/Pen_icon.svg';
import styles from './AccountProfileBlock.module.scss';
import ResetPasswordModal from '../ResetPasswordModal/ResetPasswordModal';


const AccountProfileBlock = () => {
    const { username, userId, email } = useSelector((state: RootState) => state.userDataReducer);
    const { uid } = useSelector((state: RootState) => state.authReducer);
    const dispatch = useDispatch();

    const [editableText, setEditableText] = useState(username);
    const [inputValue, setInputValue] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [isPasswordModalActive, setIsPasswordModalActive] = useState(false);

    useEffect(() => {
        if (username) {
            setEditableText(username);
            setInputValue(username);
        }
    }, [username]);

    const saveNewData = () => {
        if (uid)
        postUserData(uid, {username: inputValue})
        .then(() => {
            dispatch(userDataActions.setUserData({username: inputValue}));
        })
        setIsEditing(false);
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            saveNewData();
        }
    };

    const handleResetPassword = () => {
        if (email)
        updatePassword(email);
        setIsPasswordModalActive(false);
    }

    return (
        <>
            <section className={styles.container}>
                <div className={styles.title__container} onClick={() => {setIsEditing(true)}}>
                    <h3 className={styles.title}>Profile</h3>
                    {!isEditing && <p className={styles.edit}>Edit <Image className={styles.pen} src={Pen_icon} alt='White pen icon'/></p>}
                </div>
                <div className={styles.userinfo__container}>
                    <div className={styles.userinfo__list}>
                        <p className={styles.username}>
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
                        {isEditing ? (
                            <p>Password: <u onClick={() => setIsPasswordModalActive(true)} style={{cursor: 'pointer'}}>change</u></p>
                        ) : (
                            <p>Password: ********</p>
                        )}
                        {isEditing && (
                            <div className={styles.action_links}>
                                <p className={styles.delete}><u>Delete account</u></p>
                                <p className={styles.change} onClick={() => saveNewData()}><u>Save changes</u></p>
                            </div>
                        )}
                    </div>
                    <div className={styles.avatar}>
                        {/* Компонент выбора аватара */}
                    </div>
                </div>
            </section>
            <ResetPasswordModal 
                handleResetPassword={handleResetPassword}
                isPasswordModalActive={isPasswordModalActive}
                setIsPasswordModalActive={setIsPasswordModalActive}
            />
        </>
    )
}

export default AccountProfileBlock;