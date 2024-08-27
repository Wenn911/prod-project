import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared";

interface Props {
className?: string;
}

export const LoginForm: FC<Props> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" placeholder={t('Enter username')} autoFocus />
            <Input type="text" placeholder={t('Enter password')} />
            <Button className={classNames(cls.loginBtn)}>{t('Sign in')}</Button>
        </div>
    )
};

