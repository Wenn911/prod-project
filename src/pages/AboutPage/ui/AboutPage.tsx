import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <div>
      {t("About")}
      {t("About123123")}
    </div>
  );
};

export default AboutPage;
