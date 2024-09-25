import { FC, useCallback, useEffect } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from './ProfilePage.module.scss';
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Country, Currency, fetchProfileData, getProfileError, getProfileForm, getProfileLoading, getProfileReadonly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer, ValidateProfileError } from "entities";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

const reducers: ReducersList = {
    profile: profileReducer
}

interface Props {
    className?: string;
}

const ProfilePage: FC<Props> = ({ className }) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile')
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslate = {
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.NO_DATA]: t('Empty data'),
    }

    const numberRegex = /^\d+$/;

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData())
        }
    }, [dispatch])

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstName: value || '' }))
    }, [dispatch])

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastName: value || '' }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        if (value?.match(numberRegex)) {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
        }

        return;
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((error) => (
                    <Text 
                        key={error} 
                        theme={TextTheme.ERROR} 
                        text={validateErrorTranslate[error]} 
                    />
                ))}
                <ProfileCard 
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>
    )
};

export default ProfilePage

