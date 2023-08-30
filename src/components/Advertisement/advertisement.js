
import './advertisement.css';
import image from "../../assets/wow.png";
import { useTranslation } from "react-i18next";

function Advertisment(props) {
  const { t } = useTranslation();

    return (
        <div className="flex-container">
        <div className="image-block">
          <img src={image} alt="Image" />
        </div>
        <div className="text-block">
        <div className="text-block">
        <p>{t("adv1")}<br /><strong>{t("adv2")}</strong><br />
        {t("adv3")}<br /><br />
        {t("adv4")}<br />{t("adv5")}<br /><br />
        {t("adv6")}<br />{t("adv7")}<br /><br />
        {t("adv8")}<br />{t("adv9")}</p>
      </div>
      <div className="bookButton"
      onClick={()=>props.routeChange("/date")}
      >
          <a>{t("booknow")}</a>
        </div>

        </div>
      </div>
    );
  }
  export default Advertisment;