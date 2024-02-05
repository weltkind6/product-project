import {classNames} from "helpers/classNames/classNames";
import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {children, isOpen, onClose, lazy} = props
    const [isClosing, setIsClosing]  = useState(false);
    const [isMounted, setIsMounted]  = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if(isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);


    const closeHandler = useCallback(() => {
        if(onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() =>  {
                onClose();
                setIsClosing(false);
            }, 300)
        }
    }, [onClose])

    const onContentClick = (e: React.MouseEvent) => e.stopPropagation()

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => clearTimeout(timerRef.current)
    }, [isOpen, onKeyDown])

    const mods: Record<string, boolean> = {
        [styles.opened]:  isOpen,
        [styles.isClosing]: isClosing,
    }

    if(lazy && !isMounted) {
        return null;
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
