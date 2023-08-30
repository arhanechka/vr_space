import { useNavigate } from "react-router-dom";
import "./button.css";
import { useTranslation } from "react-i18next";


function BookButton(props) {
    const { t } = useTranslation();

    return (
        <div class="wrap"  onClick={()=>props.routeChange(props.bookingpath)}> 
        <button class="button">{t("booknow")}</button>
      </div>
    );
  }
  export default BookButton;