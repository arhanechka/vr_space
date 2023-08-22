
import { Link } from "react-router-dom";

function Header() {
    return (
  
  <nav className="menu">
      <ul className="menu-list">
        <Link to='/'>
        <li><a>Home</a></li>
        </Link>
        <Link to='/about'>
        <li><a >About</a></li>
        </Link>
        <Link to='/booking'>
        <li><a href="#">Booking</a></li>
        </Link>
        <Link to='/games'>
        <li><a href="#">Our games</a></li>
        </Link>
        <Link to='/contacts'>
        <li><a href="#">Contact</a></li>
        </Link>

      </ul>
    </nav>
    );
  }
  
  export default Header;