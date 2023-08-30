
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="center-content">
      <p className="display-2">{t("text1")}</p>

        <div className="display-3">
          {t("text2")}
        </div>
      </div>
    </div>
  );
}
export default Home;
