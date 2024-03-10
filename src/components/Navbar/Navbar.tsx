'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import LogoutIcon from '@/assets/logout-icon.svg';
import Logo from '@/assets/spaceDev_logo.svg';
import { RootState } from '@/lib/redux/store';
import styles from './Navbar.module.scss';
import { LogoutUser } from '@/services/LoginService';

const Navbar = () => {
    const isAuth = useSelector((state: RootState) => state.authReducer.isAuthenticated);
    const username = useSelector((state: RootState) => state.userDataReducer.username);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link href='/'>
                    <Image src={Logo} alt='Logo'/>
                </Link>
                {isAuth && (
                    <div className={styles.right_side}>
                        <nav>
                            <ul className={styles.links}>
                                <li><Link className={styles.link} href='/courses'>courses</Link></li>
                                <li><Link className={styles.link} href='/account'>account</Link></li>
                            </ul>
                        </nav>
                        <div className={styles.user_side}>
                            <p className={styles.username}>{username}</p>
                            <div className={styles.avatar}></div>
                            <Image
                                src={LogoutIcon} 
                                alt='Logout white icon'
                                className={styles.logout}
                                onClick={LogoutUser}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;