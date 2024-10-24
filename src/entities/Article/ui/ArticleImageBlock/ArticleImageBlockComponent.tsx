import { ArticleImageBlock } from "../../model/types/article";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextAlign } from "shared/ui/Text/Text";
import cls from "./ArticleImageBlockComponent.module.scss";

interface Props {
    className?: string;
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
                <Text title={block.title} align={TextAlign.CENTER} />
            )} 
        </div>
    )
});

