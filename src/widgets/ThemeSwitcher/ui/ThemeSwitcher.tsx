import { Theme, useTheme } from "app/providers/ThemeProvider";
import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import DarkModeIcon from "shared/assets/icons/dark-mode-toggle-icon.svg";
import LightModeIcon from "shared/assets/icons/light-mode-toggle-icon.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames("", {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.LIGHT ? (
                <LightModeIcon width="40" fill="white" />
            ) : (
                <DarkModeIcon width="40" />
            )}
        </Button>
    );
};
