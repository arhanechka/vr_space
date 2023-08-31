// ContactDetails.js
import React, {useState, useEffect} from 'react';
import './BookingForm.css'; // Import your CSS file

const ContactDetails = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleFullNameChange = (event) => {
      setFullName(event.target.value);
    };
  
    const handlePhoneNumberChange = (event) => {
      setPhoneNumber(event.target.value);
    };

    useEffect(()=>{
        if (email && fullName && phoneNumber){
            
        }
    })
  return (
    <div className="contact-details">
    <h2>Your Contact Details</h2>
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input
    type="email"
    id="email"
    placeholder="Enter your email"
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
    required
    title="Please enter a valid email address"
    onChange={handleEmailChange}
  />
    </div>
    <div className="form-group">
      <label htmlFor="fullName">Full Name</label>
      <input type="text" id="fullName" placeholder="Enter your full name" onChange={handleFullNameChange}
/>
    </div>
    <div className="form-group">
      <label htmlFor="phoneNumber">Phone Number</label>
      <div className="phone-input">
        <select id="countryCode">
          <option value="+1">+1 (USA)</option>
          <option value="+44">+44 (UK)</option>
          {/* Add more options for other country codes */}
        </select>
        <input type="tel" id="phoneNumber" placeholder="Enter your phone number" onChange={handlePhoneNumberChange}
/>
      </div>
    </div>
  </div>
);
}

export default ContactDetails;
