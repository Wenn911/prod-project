import { FC, memo } from "react"
import { useTranslation } from "react-i18next";
import { AppLink } from "shared";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from './SidebarItem.module.scss'
import { ISidebarItem } from "../../model/items";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities";

interface Props {
    item: ISidebarItem;
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: Props) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) return null;
    
    return (
        <AppLink theme={AppLinkTheme.SECONDARY} to={item.path} className={classNames(cls.item, {[cls.collapsed]: collapsed})}>
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span> 
        </AppLink>
    )
});
