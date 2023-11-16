import React from 'react';
import {classNames} from "helpers/classNames/classNames";
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface NavbarProps {
    className?: string;

}
export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [])}>
            <ThemeSwitcher />
            <LangSwitcher />
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
