import { classNames } from 'helpers/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher'

import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string

}
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [])} data-testid="navbar">
            <div className={classNames(styles.switcherBlock, {}, [])}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>
    )
}
