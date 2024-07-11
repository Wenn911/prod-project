import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface Props {
  className?: string;
}

export const LangSwitcher: FC<Props> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const switchLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div className={classNames(cls.LangSwitcher, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={switchLang}>
        {t("Language")}
      </Button>
    </div>
  );
};
