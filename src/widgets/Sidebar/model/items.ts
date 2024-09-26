import { VFC, SVGProps } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface ISidebarItem {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>
    authOnly?: boolean;
}

export const SidebarItemsList: ISidebarItem[] = [
    {
        path: RoutePath.main,
        text: 'Main',
        Icon: HomeIcon,
    },
    {
        path: RoutePath.about,
        text: 'About',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Articles',
        Icon: ProfileIcon,
        authOnly: true,
    },
]