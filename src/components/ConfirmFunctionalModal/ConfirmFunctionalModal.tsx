'use client'
import React from 'react';
import ConfirmModal from '../UI/ConfirmModal/ConfirmModal';
import styles from './ConfirmFunctionalModal.module.scss';

type ResetPasswordModalProps = {
    handleFunc: () => void
    isModalActive: boolean
    setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>
}

const ConfirmFunctionalModal = ({ handleFunc, isModalActive, setIsModalActive }: ResetPasswordModalProps) => {
    return (
        <ConfirmModal
        active={isModalActive}
        setActive={setIsModalActive}
        extendClass={styles.container}
        >
            <div className={styles.heading}>
                <h5 className={styles.title}>Are you shure?</h5>
                <p className={styles.message}>Some changes cannot be canceled</p>
            </div>
            <div className={styles.btn__container}>
                <button className={styles.dis_btn} onClick={() => setIsModalActive(false)}><u>Go back</u></button>
                <button className={styles.confirm_btn} onClick={handleFunc}><u>Yes, continue</u></button>
            </div>
        </ConfirmModal>
    )
}

export default ConfirmFunctionalModal;