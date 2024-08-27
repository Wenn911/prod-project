import { Counter } from "entities";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation();
    return <div>{t("Main")}<Counter /></div>;
};

export default MainPage;
