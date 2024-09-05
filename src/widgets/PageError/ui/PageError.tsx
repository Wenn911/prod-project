import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames"
import cls from './PageError.module.scss'
import { Button } from "shared/ui/Button/Button";
import { memo } from "react";

interface Props {
    className?: string;
}

export const PageError = memo(({ className }: Props) => {
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
});
