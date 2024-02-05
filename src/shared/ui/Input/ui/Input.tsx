import {classNames} from "helpers/classNames/classNames";
import {useTranslation} from "react-i18next";
import styles from './Input.module.scss';
import React, {InputHTMLAttributes, memo, useEffect, useRef, useState} from "react";

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HtmlInputProps{
    placeHolder?: string,
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;

}

export const Input = memo((props: InputProps) => {
    const {
        value,
        onChange,
        type = 'text',
        placeHolder,
        autoFocus,
        ...rest
    } = props;
    console.log('autoFocus', autoFocus);

    const {}  = useTranslation();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(autoFocus) {
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    return (
        <input
            ref={inputRef}
            className={classNames(styles.Input, {}, [])}
            type={type}
            value={value}
            placeholder={placeHolder}
            onChange={onChangeHandler}
            {...rest}
        />
    );
});

Input.displayName = 'Input';
