import { classNames, Mods } from "shared/lib/classNames/classNames"
import cls from './Text.module.scss'
import { memo } from "react";

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface Props {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: Props) => {
    const { 
        className, 
        title, 
        text, 
        theme = TextTheme.PRIMARY, 
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true
    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={classNames(cls.title)}>{title}</p> }
            {text && <p className={classNames(cls.text)}>{text}</p> }
        </div>
    )
});

