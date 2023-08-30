import React, { useState, useEffect } from "react";
import logoIcon from "../../assets/hor_logo.png";
import { useLocation } from "react-router-dom";
import Menu from "./menu";
import HomeTop from "./homeTop";
import BookButton from '../BookButton/bookButton';
import logo1 from "../../assets/logo_new.png";
import logo2 from "../../assets/logo_new1.png";
import logo3 from "../../assets/logo_new2.jpg";
import './Header.css'; // Import your CSS file

import LanguageSelect from "./LanguageSelect";

function Header(props) {
  const bgs = {
    "/vr_space": logo1,
    "/": logo1,
    "/games": logo2,
    "/booking": logo3
  };
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const location = useLocation();
  let currentLocation = location.pathname;
  console.log(currentLocation);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = 500;
    const newOpacity = Math.min(0.6, scrollY / maxScroll);
    setScrollOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${bgs[currentLocation]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        width: "100vw",
        height: "70vh",
      }}
    >
      <header
        className="App-header"
        style={{ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})` }}
      >
        <button class="header-burger js-open-menu" type="button">
          <svg width="29.54" height="18.62">
            <use href="/src/app.svg"></use>
          </svg>
        </button>
        <div class="mobile-menu js-menu-container">
          <button class="menu-close-button js-close-menu">
            <svg width="8px" height="8px">
              <use href="./images/sprite.svg#icon-cross"></use>
            </svg>
          </button>
        </div>
        <LanguageSelect />

        <BookButton routeChange={props.routeChange} bookingpath="booking" />
        <Menu />
        <div className="Logo-block">
          <img
            className="small-logo"
            src={logoIcon}
            alt="logo"
            onClick={() => props.routeChange(props.homepath)}
          />
        </div>
      </header>
      <HomeTop />
    </div>
  );
}

export default Header;
