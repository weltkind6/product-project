import {classNames} from "helpers/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;

}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...rest
    } = props;

    return (
        <button
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...rest}
        >
            {children}
        </button>
    );
};
