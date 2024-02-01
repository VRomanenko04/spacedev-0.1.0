import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import Logo from '../../assets/spaceDev_logo.svg';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link href='/'>
                    <Image src={Logo} alt='Logo'/>
                </Link>
                <div className={styles.right_side}>
                    <nav>
                        <ul className={styles.links}>
                            <li><Link className={styles.link} href='/courses'>courses</Link></li>
                            <li><Link className={styles.link} href='/account'>account</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.avatar}></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;