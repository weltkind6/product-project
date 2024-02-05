import {classNames} from 'helpers/classNames/classNames'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher'
import {LangSwitcher} from 'shared/ui/LangSwitcher'

import styles from './Navbar.module.scss'
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useCallback, useState} from "react";
import {useTranslation} from "react-i18next";
import {translator} from "helpers/translator/translator";
import {LoginModal} from "feauters/AuthByUserName";

export const Navbar = () => {
    const {} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsOpen(prev => !prev);
    }, [])

    return (
        <div className={classNames(styles.Navbar, {}, [])} data-testid="navbar">
            <LoginModal
                isOpen={isOpen}
                onCLose={onCloseModal}
            />
            <div className={styles.panel}>
                <div className={styles.switcherBlock}>
                    <ThemeSwitcher />
                    <LangSwitcher className={styles.lang}/>
                </div>
                <Button
                    theme={ThemeButton.BACKGROUND_INVERTED}
                    onClick={onCloseModal}
                >
                    {translator('Войти')}
                </Button>
            </div>
        </div>
    )
}
