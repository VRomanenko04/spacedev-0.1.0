'use client'
import React from 'react';
import ConfirmModal from '../UI/ConfirmModal/ConfirmModal';
import styles from './ResetPasswordModal.module.scss';

type ResetPasswordModalProps = {
    handleResetPassword: () => void
    isPasswordModalActive: boolean
    setIsPasswordModalActive: React.Dispatch<React.SetStateAction<boolean>>
}

const ResetPasswordModal = ({ handleResetPassword, isPasswordModalActive, setIsPasswordModalActive }: ResetPasswordModalProps) => {
    return (
        <ConfirmModal
        active={isPasswordModalActive}
        setActive={setIsPasswordModalActive}
        extendClass={styles.container}
        >
            <div className={styles.heading}>
                <h5 className={styles.title}>Are you shure?</h5>
                <p className={styles.message}>Some changes cannot be canceled</p>
            </div>
            <div className={styles.btn__container}>
                <button className={styles.dis_btn} onClick={() => setIsPasswordModalActive(false)}><u>Go back</u></button>
                <button className={styles.confirm_btn} onClick={handleResetPassword}><u>Yes, continue</u></button>
            </div>
        </ConfirmModal>
    )
}

export default ResetPasswordModal;