import React from 'react';
import styles from './LinkButton.module.scss';
import Link from 'next/link';

type Props = {
    extraClass?: string
    textAnimateClass?: string
    linkText: string
    linkHref: string
}

const LinkButton = (props: Props) => {
    return (
        <Link className={`${styles.UiBtn} ${props.extraClass}`} href={props.linkHref}>
            <p className={props.textAnimateClass}>{props.linkText}</p>
        </Link>
    )
}

export default LinkButton;