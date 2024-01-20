import {classNames} from 'helpers/classNames/classNames'
import {useState} from 'react'
import {Button, ButtonSize, ThemeButton} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import About from 'shared/assets/icons/about.svg'
import Main from 'shared/assets/icons/main.svg'
import styles from './Sidebar.module.scss'
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string

}

export const Sidebar = ({className}: SidebarProps) => {
    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState(false)
    const onToggleHandler = () => {
        setIsCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(styles.Sidebar,
            {[styles.isCollapsed]: isCollapsed}, [className])} data-testid="sidebar"
        >
            <Button
                square
                className={styles.toggleBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.MEDIUM}
                onClick={onToggleHandler}
                data-testid="sidebar-toggle"
            >
                {isCollapsed ? ">" : "<"}
            </Button>
            <div className={styles.links}>
                <AppLink
                    className={styles.linkWrapper}
                    theme={AppLinkTheme.PRIMARY}
                    to={'/'}
                >
                    <Main className={styles.icon}/>
                    <span>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    className={styles.linkWrapper}
                    to={'/about'}
                    theme={AppLinkTheme.PRIMARY}
                >
                    <About className={styles.icon}/>
                    <span>{t('Домой')}</span>
                </AppLink>
            </div>
        </div>
    )
}
