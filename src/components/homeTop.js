import logo from "../assets/main_icont.png";
import logoText from "../assets/main_textt.png";

function HomeTop() {
  return (
    <div className="home-container">
      <div className="center-content">
        <img src={logo} className="Big-logo" alt="logo" />
        <img className="Big-text" src={logoText} alt="logo" />

        <h2 className="display-4">Dive into the Digital Dimension: </h2>
        <p className="display-2">Connect with the Virtual Reality Club</p>
      </div>
    </div>
  );
};

export default HomeTop;
