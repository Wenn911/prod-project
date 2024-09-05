import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface Props {
  className?: string;
  short?: boolean
}

export const LangSwitcher = memo(({ className, short }: Props) => {
    const { t, i18n } = useTranslation();
    const switchLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <div className={classNames("", {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={switchLang}>
                {t(short ? "ShortLang" : "Language")}
            </Button>
        </div>
    );
});
