import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticlesPage.module.scss';

interface Props {
className?: string;
}

const ArticlesPage = ({ className }: Props) => {
    return (
        <div>
            123
        </div>
    )
};

export default memo(ArticlesPage);