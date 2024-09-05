import { classNames } from "shared/lib/classNames/classNames"
import cls from './Text.module.scss'
import { memo } from "react";

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface Props {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme   
}

export const Text = memo(({ className, title, text, theme = TextTheme.PRIMARY }: Props) => {
    return (
        <div className={classNames(cls.Text, {[cls[theme]]: true}, [className])}>
            {title && <p className={classNames(cls.title)}>{title}</p> }
            {text && <p className={classNames(cls.text)}>{text}</p> }
        </div>
    )
});

