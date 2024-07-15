import { FC } from "react"
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames"
import cls from './PageError.module.scss'
import { Button } from "shared/ui/Button/Button";

interface Props {
className?: string;
}

export const PageError: FC<Props> = ({ className }) => {
    const { t } = useTranslation()
    const reloadPage = () => {
        window.location.reload()
    }
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('Something went wrong')}
            <Button onClick={reloadPage}>{t('Reload')}</Button>
        </div>
    )
};

