import React from 'react'
import styles from './Footer.module.scss';
import Image from 'next/image';
import SocialIcons from '../SocialIcons/SocialIcons';
import Logo from '../../../assets/spaceDev_logo.svg';


const Footer = () => {
    return (
        <footer className={styles.container}>
            <Image src={Logo} alt='Logo'/>
            <h6>
                We pride ourselves on making our courses accessible to a wide audience, and we strive to make learning to code accessible to everyone.<br/>
                SpaceDev is not just training, it is a path to new horizons in the world of technology.<br/>
                Our team will be extremely grateful to you if, after completing the courses, you continue your path in IT and achieve incredible heights.
            </h6>
            <SocialIcons />
        </footer>
    )
}

export default Footer;