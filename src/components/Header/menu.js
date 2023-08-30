import { Link } from "react-router-dom";
import { menu } from "../../utils/constants";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();

  return (
    <nav className="menu">
      <ul className="menu-list">
      {menu.map(item => (
        <Link key={item.name} to={item.link} className="menu-link">
          <li>
            <a>{t(item.name)}</a>
          </li>
        </Link>
      ))}
      </ul>
    </nav>
  );
}

export default Menu;
