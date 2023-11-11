import React from 'react';
import {classNames} from "helpers/classNames/classNames";
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;

}
export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [])}>
            <div className={styles.links}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={'/'}
                    className={styles.mainLink}>
                    Main
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.PRIMARY}
                >About
                </AppLink>
            </div>
        </div>
    );
};
