import logo from "../../assets/main_icont.png";
import logoText from "../../assets/main_textt.png";
import { useTranslation } from "react-i18next";

function HomeTop(props) {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="center-content">
        {props.isLogo &&
        <>
        <img src={logo} className="Big-logo" alt="logo" />
        <img className="Big-text" src={logoText} alt="logo" />
        </>
      }
        <h2 className="display-4" style={{ marginTop: props.isLogo ? '0' : '200px' }}>{t("main_header")}</h2>
        <p className="display-2" style={{ marginTop: '-30px', position: "relative"}}>{t("main_text")}</p>
      </div>
    </div>
  );
}

export default HomeTop;
