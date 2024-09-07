import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileLoading } from "entities/Profile/model/selectors/getProfileLoading/getProfileLoading";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Input } from "shared";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import cls from "./ProfileCard.module.scss";

interface Props {
    className?: string;
}

export const ProfileCard = ({ className }: Props) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={classNames(cls.header)}>
                <Text title={t('Profile')} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstName}
                    placeholder={t('Your name')}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Your last name')}
                />
            </div>
        </div>
    )
};

