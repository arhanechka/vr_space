
import { useTranslation } from "react-i18next";
import image from "../../assets/planning.jpg";
import React, { useEffect, useState } from 'react';
import './EventPlanning.css';  

function EventPlanning() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };
  const handleEmail = (event) => {
    setTextFieldValue(event.target.value);
  }; 
  return (
    <div className="flex-container"  style={{ height: 'auto', marginTop: 50}}>
    <div className="image-block">
      <img src={image} alt="Image" />
    </div>
    <div className="text-block">
    <div className="text-block">
    <p>Planning an event?<br /><strong>Birthday ot friends party?</strong><br />
    We are happy to share it with you and your team!<br /><br />
    Call us by phone: <br />554564564<br /><br />
    Write us an email to<br />vrspace.pt@gmail.com<br /><br />
    ot fill this form<br /></p>
    <div className="form-wrapper">
      <div className="form-container">
    <form>
        <div >
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} className="input" placeholder="Enter your name"/>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange}  className="input" placeholder="Enter your email"/>
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={handlePhoneChange}  className="input" placeholder="Enter your phone"/>
        </div>
    <textarea
    style={{ width: '90%', marginTop:"20px" }}
        rows={10} // Adjust the number of rows as needed (e.g., 12)
        value={textFieldValue}
        onChange={handleTextFieldChange}
        placeholder="Enter your text"
      />
      </form>
      </div>
      </div>
  </div>
  <div className="bookButton"
  onClick={handleEmail}
  >
      <a>Send</a>
    </div>

    </div>
  </div>
);
}
export default EventPlanning;