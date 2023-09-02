import React, { useState, useEffect } from "react";
import logo from "../assets/hands.png";
import logoIcon from "../assets/hor_logo.png";
import bg_img from "../assets/bg_img1.avif";
import bg_img1 from "../assets/bg_img2.avif";
import bg_img2 from "../assets/logo1.avif";
import women from "../assets/women.avif";
import { useNavigate, useLocation } from "react-router-dom";
import Menu from "./menu";
import HomeTop from "./homeTop";
import BookButton from "./BookButton/bookButton";
function Header(props) {
  const bgs = {
    "/vr_space": logo,
    "/": logo,
    "/about": women,
    "/contacts": bg_img,
    "/games": bg_img1,
    "/booking": bg_img2,
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
        backgroundSize: "contain",
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
