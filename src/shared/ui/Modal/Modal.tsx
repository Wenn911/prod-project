import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss';
import { Portal } from "../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";

interface Props {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<Props> = (props) => {
    const { children, className, isOpen = false, onClose, lazy } = props;

    const [isClosing, setClosing] = useState<boolean>(false);
    const [isMounted, setMounted] = useState<boolean>(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const { theme } = useTheme()

    useEffect(() => {
        if (isOpen){
            setMounted(true)
        }
    }, [isOpen])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }
    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app-modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
};

