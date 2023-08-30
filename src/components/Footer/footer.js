
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'; // Import your CSS file
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        &copy; 2023 VR Space. All rights reserved.
      </div>
      <div className="social-icons">
        <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61550628332426"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
      </div>
    </footer>
  );
}
export default Footer;
