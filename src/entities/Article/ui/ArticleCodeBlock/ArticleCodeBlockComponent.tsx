import { ArticleCodeBlock } from "../../model/types/article";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Code } from "shared";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleCodeBlockComponent.module.scss";

interface Props {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({ className, block }: Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    )
});

