import React from 'react';
import styles from './Button.module.scss'

import { classNames } from 'helpers/classNames/classNames'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINED = 'outlined',
  PRIMARY = 'primary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton

}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...rest
    } = props

    return (
        <button
            className={classNames(
                styles.Button, {}, [className, styles[theme]])}
            {...rest}
        >
            {children}
        </button>
    )
}
