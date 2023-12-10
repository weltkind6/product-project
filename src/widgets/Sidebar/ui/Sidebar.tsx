import { classNames } from 'helpers/classNames/classNames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'
import i18next from "i18next";

interface SidebarProps {
  className?: string

}
export const Sidebar = ({ className }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const onToggleHandler = () => { setIsCollapsed(prev => !prev) }

    return (
        <div className={classNames(styles.Sidebar,
            { [styles.isCollapsed]: isCollapsed }, [className])} data-testid="sidebar"
        >
            <button onClick={onToggleHandler} data-testid="sidebar-toggle">
                {i18next.t('Toggle')}
            </button>
        </div>
    )
}
