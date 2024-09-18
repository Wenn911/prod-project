import { CSSProperties, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from './Avatar.module.scss';

interface Props {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size, alt }: Props) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        }
    }, [size])

    return (
        <img 
            src={src} 
            alt={alt}
            style={styles} 
            className={classNames(cls.Avatar, mods, [className])} 
        />
    )
};

