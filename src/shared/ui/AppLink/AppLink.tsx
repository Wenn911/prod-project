import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface Props extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<Props> = (props) => {
  const {
    children,
    className,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.link, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
