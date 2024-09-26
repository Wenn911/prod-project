import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetailPage.module.scss';

interface Props {
className?: string;
}

const ArticleDetailPage = ({ className }: Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleDetailPage)}>
            Article detail
        </div>
    )
};

export default memo(ArticleDetailPage);