import { memo, useCallback, useEffect } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared";
import { useDispatch, useSelector } from "react-redux";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { getLoginError, getLoginLoading, getLoginPassword, getLoginUsername } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface Props {
className?: string;
}

const initialsReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({ className }: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

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
        <DynamicModuleLoader reducers={initialsReducers}>
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
        </DynamicModuleLoader>
    )
});

export default LoginForm