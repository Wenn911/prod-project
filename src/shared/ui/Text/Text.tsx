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

interface Props {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: Props) => {
    const { className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true
    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={classNames(cls.title)}>{title}</p> }
            {text && <p className={classNames(cls.text)}>{text}</p> }
        </div>
    )
});

