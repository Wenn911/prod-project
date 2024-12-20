import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { ArticleDetailPage } from "pages/ArticleDetailPage";
import { ArticlesPage } from "pages/ArticlesPage";

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = 'not_found',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAIL = 'article_detail'
}
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/", // +id
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLE_DETAIL]: "/articles/", // +id
    [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAIL]: {
        path: `${RoutePath.article_detail}:id`,
        element: <ArticleDetailPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element:<NotFoundPage />
    }
};
