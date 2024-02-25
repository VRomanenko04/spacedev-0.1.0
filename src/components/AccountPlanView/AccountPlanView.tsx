import React from 'react';
import styles from './AccountPlanView.module.scss';


const AccountPlanView = () => {

    const fillerStyle = {
        width: "60%",
        height: "100%",
        borderRadius: "4px",
        background: "#EA4E24",
    };

    return (
        <div className={styles.container}>
            <div className={styles.align}>
                <h3>Basic</h3>
                <div className={styles.timeline_block}>
                    <p>20 days left</p>
                    <div className={styles.progressBar}>
                        <div style={fillerStyle}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPlanView;