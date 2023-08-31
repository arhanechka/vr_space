import React, { useState } from 'react';
import './Header.css'; 
import { useTranslation } from 'react-i18next'

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('pt'); // Default language is English
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    i18n.changeLanguage(event.target.value)
    // You can perform additional actions based on the selected language
  };

  return (
    <div className="language-select">
      <select id="languages" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">EN</option>
        <option value="pt">PT</option>
        {/* Add more language options here */}
      </select>
    </div>
  );
};

export default LanguageSelect;
