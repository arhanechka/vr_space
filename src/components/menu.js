import { Link } from "react-router-dom";
import { menu } from "../utils/constants";

function Menu() {
  
  return (
    <nav className="menu">
      <ul className="menu-list">
      {menu.map(item => (
        <Link key={item.name} to={item.link} className="menu-link">
          <li>
            <a>{item.name}</a>
          </li>
        </Link>
      ))}
      </ul>
    </nav>
  );
}

export default Menu;
