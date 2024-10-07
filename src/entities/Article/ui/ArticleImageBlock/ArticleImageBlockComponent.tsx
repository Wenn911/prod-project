import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleImageBlock.module.scss";

interface Props {
className?: string;
}

export const ArticleImageBlockComponent = ({ className }: Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
            ArticleImageBlock   
        </div>
    )
};

