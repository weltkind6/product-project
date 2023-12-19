import React from 'react';
import {classNames} from 'helpers/classNames/classNames'
import {type ButtonHTMLAttributes, type FC} from 'react'
import styles from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINED = 'outlined',
    PRIMARY = 'primary',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    SMALL ='size_s',
    MEDIUM ='size_m',
    LARGE ='size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton,
    size?: ButtonSize,
    square?: boolean
}



export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        size,
        square,
        ...rest
    } = props

    return (
        <button
            className={classNames(
                styles.Button,
                {[styles.square]: square},
                [className, styles[theme], styles[size]])}
            {...rest}
        >
            {children}
        </button>
    )
}
