import React from 'react'
import styles from './ManagePlanLink.module.scss';
import Link from 'next/link';

const ManagePlanLink = () => {
    return (
        <Link className={styles.link_container} href='/plans'>
            <div className={styles.link_btn}>
                <p>manage your plan</p>
            </div>
        </Link>
    )
}

export default ManagePlanLink;