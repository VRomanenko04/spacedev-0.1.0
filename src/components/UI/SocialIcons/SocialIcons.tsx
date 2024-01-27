import React from 'react';
import Image from 'next/image';
import styles from './SocialIcons.module.scss';

import DiscordLogo from '../../../assets/Discord_logo.svg';
import InstagramLogo from '../../../assets/Inst_logo.svg';
import FacebookLogog from '../../../assets/Facebook_logo.svg';

type SocialItemProps = {
    extraClass?: string
}

const SocialIcons = ({extraClass}: SocialItemProps) => {
    return (
        <div className={`${styles.about_social} ${extraClass}`}>
            <a href="##">
                <Image src={DiscordLogo} alt="discord" />
            </a>
            <a href="##">
                <Image src={InstagramLogo} alt="insta" />
            </a>
            <a href="##">
                <Image src={FacebookLogog} alt="facebook" />
            </a>
        </div>
    )
}

export default SocialIcons;