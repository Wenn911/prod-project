import { FC } from "react"
import cls from './PageLoader.module.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared";

interface Props {
className?: string;
}

export const PageLoader: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    )
};

