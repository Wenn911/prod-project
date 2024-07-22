import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink } from "shared";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation()
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button 
                data-testid='sidebar-toggle' 
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
                        <HomeIcon className={cls.icon} />
                        <span className={cls.link}>{t('Main')}</span> 
                    </AppLink>
                </div>
                <div>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>{t('About')}</span>
                    </AppLink>
                </div>
                
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
