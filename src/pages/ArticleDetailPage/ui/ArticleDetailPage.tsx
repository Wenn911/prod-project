import { ArticleDetails } from "entities";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetailPage.module.scss';

interface Props {
className?: string;
}

const ArticleDetailPage = ({ className }: Props) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailPage)}>
                {t('Article not found')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleDetailPage)}>
            <ArticleDetails id={id} />
        </div>
    )
};

export default memo(ArticleDetailPage);