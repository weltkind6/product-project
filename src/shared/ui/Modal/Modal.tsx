import {classNames} from "helpers/classNames/classNames";
import React, {ReactNode, useRef, useState} from "react";
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
    const {children, className, isOpen, onClose} = props
    const [isClosing, setIsClosing]  = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = () => {
        onClose && onClose();
        timerRef.current = setTimeout(() => onClose(), 300)
    }
    const onContentClick = (e: React.MouseEvent) => e.stopPropagation()

    const mods: Record<string, boolean> = {
        [styles.opened]:  isOpen,
    }

    return (
        <div className={classNames(styles.Modal, mods, [])}>
            <div className={styles.overlay} onClick={closeHandler}>
                <div className={styles.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
