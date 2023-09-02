import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`burger-menu ${menuOpen ? "open" : ""}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {menuOpen && (
        <div className="menu-items">
          <Link to="/home">Home</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/vr-game-list">VR Game List</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/about">About</Link>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
