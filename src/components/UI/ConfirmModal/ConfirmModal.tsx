import React from 'react';
import styles from './ConfirmModal.module.scss';

type ConfirmModalProps = {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
    extendClass?: string
}

const ConfirmModal = ({ children, extendClass, active, setActive }: ConfirmModalProps) => {

    const ExtendClass = `${extendClass ? extendClass : ''}`

    return (
        <div className={`${styles.modal} ${active ? styles.active : ''}`} onClick={() => setActive(false)}>
            <div className={`${styles.modal__content} ${ExtendClass} ${active ? styles.active : ''}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ConfirmModal;