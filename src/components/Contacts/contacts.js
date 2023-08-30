import React from 'react';
import './Contacts.css'; // Import your CSS file
import { useTranslation } from "react-i18next";


const Contacts = () => {
    const { t } = useTranslation();
  return (
    <div className="contacts">
      <div className="column">
      <div className='row'>
          <div className='square'></div>
          <h3>{t("contact1")}</h3>
        </div>
        <ul>
          <li>Phone: 349-56-47</li>
          <li>Email: vrspace.pt@gmail.com</li>
          <li>Address: 123 Main St, Setubal</li>
        </ul>
      </div>
      <div className="column">
      <div className='row'>
          <div className='square'></div>
        <h3>{t("contact2")}</h3>
        </div>
        <ul>
          <li>Latest Post: Lorem ipsum dolor sit amet</li>
          <li>Popular Posts: Consectetur adipiscing elit</li>
          <li>Categories: Sed do eiusmod tempor</li>
        </ul>
      </div>
      <div className="column">
      <div className='row'>
          <div className='square'></div>
        <h3>{t("contact3")}</h3>
        </div>
        <ul>
          <li>Top Games: Lorem ipsum dolor sit amet</li>
          <li>New Releases: Consectetur adipiscing elit</li>
          <li>Genres: Sed do eiusmod tempor</li>
        </ul>
      </div>
      <div className="column">
      <div className='row'>
          <div className='square'></div>
        <h3>{t("contact4")}</h3>
        </div>
        <li>Stay updated with the latest news and events by subscribing to our mailing list.</li>
      </div>
    </div>
  );
}

export default Contacts;
