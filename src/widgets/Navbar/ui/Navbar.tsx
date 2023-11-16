import { classNames } from 'helpers/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string

}
export const Navbar = ({ className }: NavbarProps) => {
  return (
      <div className={classNames(styles.Navbar, {}, [])}>
          <div className={classNames(styles.switcherBlock, {}, [])}>
              <ThemeSwitcher />
              <LangSwitcher className={styles.lang}/>
          </div>
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
  )
}
