import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from './ProfilePage.module.scss';
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities";

const reducers: ReducersList = {
    profile: profileReducer
}

interface Props {
    className?: string;
}

const ProfilePage: FC<Props> = ({ className }) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                123
            </div>
        </DynamicModuleLoader>
    )
};

export default ProfilePage

