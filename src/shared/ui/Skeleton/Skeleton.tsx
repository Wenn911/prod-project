import { CSSProperties } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Skeleton.module.scss";

interface Props {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = (props: Props) => {
    const { className, height, width, border } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border
    }

    return (
        <div 
            style={styles}
            className={classNames(cls.Skeleton, {}, [className])}
        />
    )
};

