import { FC } from "react"
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames"
import cls from './NotFoundPage.module.scss'

interface Props {
className?: string;
}

export const NotFoundPage: FC<Props> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Page is not found')}
        </div>
    )
};

