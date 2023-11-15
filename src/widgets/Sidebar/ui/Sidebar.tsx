import {classNames} from "helpers/classNames/classNames";
import styles from './Sidebar.module.scss';
import {useState} from "react";

interface SidebarProps {
    className?: string;

}
export const Sidebar = ({className}: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const onToggleHandler = () => setIsCollapsed(prev => !prev)

    return (
        <div className={classNames(styles.Sidebar, {[styles.isCollapsed] : isCollapsed}, [className])}>
            <button onClick={onToggleHandler}>Toggle</button>
        </div>
    );
};