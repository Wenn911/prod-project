import { FC, useEffect } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from './ProfilePage.module.scss';
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { fetchProfileData, ProfileCard, profileReducer } from "entities";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const reducers: ReducersList = {
    profile: profileReducer
}

interface Props {
    className?: string;
}

const ProfilePage: FC<Props> = ({ className }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    )
};

export default ProfilePage

