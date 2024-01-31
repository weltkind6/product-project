import {classNames} from 'helpers/classNames/classNames'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher'
import {LangSwitcher} from 'shared/ui/LangSwitcher'

import styles from './Navbar.module.scss'
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useCallback, useState} from "react";
import {useTranslation} from "react-i18next";
import {translator} from "helpers/translator/translator";

export const Navbar = () => {
    const {} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpen(prev => !prev);
    }, [])

    return (
        <div className={classNames(styles.Navbar, {}, [])} data-testid="navbar">
            <Modal isOpen={isOpen} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam asperiores aut autem dolore
                dolores esse exercitationem laboriosam minus odio quaerat qui quidem, tempore!
                Fugiat molestiae nisi
                tempore, totam ullam vel?
            </Modal>
            <div className={styles.panel}>
                <div className={styles.switcherBlock}>
                    <ThemeSwitcher />
                    <LangSwitcher className={styles.lang}/>
                </div>
                <Button
                    theme={ThemeButton.BACKGROUND_INVERTED}
                    onClick={onToggleModal}
                >
                    {translator('Войти')}
                </Button>
            </div>
        </div>
    )
}
