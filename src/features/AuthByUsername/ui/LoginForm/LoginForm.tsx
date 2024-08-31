import { memo, useCallback } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface Props {
className?: string;
}

export const LoginForm = memo(({ className }: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization')} />
            {error && <Text text={t(error)} theme={TextTheme.ERROR}/>}
            <Input 
                type="text" 
                placeholder={t('Enter username')} 
                autoFocus 
                onChange={onChangeUsername} 
                value={username}
            />
            <Input 
                type="text" 
                placeholder={t('Enter password')} 
                onChange={onChangePassword}
                value={password}
            />
            <Button 
                theme={ButtonTheme.OUTLINE} 
                className={classNames(cls.loginBtn)}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Sign in')}
            </Button>
        </div>
    )
});

