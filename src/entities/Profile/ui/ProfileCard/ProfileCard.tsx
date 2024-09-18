import { Country, CountrySelect, Currency, CurrencySelect, IProfile } from "entities";
import { useTranslation } from "react-i18next";
import { Input, Loader, Select } from "shared";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import cls from "./ProfileCard.module.scss";

interface Props {
    className?: string;
    data?: IProfile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeLastName?: (value?: string) => void;
    onChangeFirstName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = (props: Props) => {
    const { 
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An error occurred while loading the profile')}
                    text={t('Try refreshing the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    value={data?.firstName}
                    className={cls.input}
                    placeholder={t('Your name')}
                    onChange={onChangeFirstName}
                    readOnly={readonly}
                />
                <Input
                    value={data?.lastName}
                    className={cls.input}
                    placeholder={t('Your last name')}
                    onChange={onChangeLastName}
                    readOnly={readonly}
                />
                <Input
                    value={data?.age}
                    className={cls.input}
                    placeholder={t('Your age')}
                    onChange={onChangeAge}
                    readOnly={readonly}
                />
                <Input
                    value={data?.city}
                    className={cls.input}
                    placeholder={t('Your city')}
                    onChange={onChangeCity}
                    readOnly={readonly}
                />
                <Input
                    value={data?.username}
                    className={cls.input}
                    placeholder={t('Your username')}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
                <Input
                    value={data?.avatar}
                    className={cls.input}
                    placeholder={t('Your avatar')}
                    onChange={onChangeAvatar}
                    readOnly={readonly}
                />
                <CurrencySelect 
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect 
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    )
};

