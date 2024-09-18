import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from './ProfilePageHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions, updateProfileData } from "entities";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface Props {
    className?: string;
}

export const ProfilePageHeader = ({ className }: Props) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, []);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, []);

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, []);
    
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {readonly 
                ?   (
                    <Button 
                        className={cls.editBtn} 
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Edit')}
                    </Button>
                ) 
                : (
                    <>
                        <Button
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            {t('Cancel')}
                        </Button>
                        <Button
                            className={cls.saveBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                        >
                            {t('Save')}
                        </Button>
                    </>
                ) 
            }
        </div>
    )
};

