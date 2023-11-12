import {classNames} from "helpers/classNames/classNames";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTheme} from "app/providers/ThemeProvider";
import Sun from 'shared/assets/icons/sun.svg';
import Moon from 'shared/assets/icons/moon.svg';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;

}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, themeToggle} = useTheme();

    return (
        <>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={themeToggle}
                className={classNames(styles.Switcher, {}, [className])}
            >
                {theme === 'light' ? <Sun /> : <Moon />}
            </Button>
        </>
    );
};
