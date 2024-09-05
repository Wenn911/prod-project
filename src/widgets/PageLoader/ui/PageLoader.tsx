import cls from './PageLoader.module.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared";
import { memo } from 'react';

interface Props {
className?: string;
}

export const PageLoader = memo(({ className }: Props) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    )
});
