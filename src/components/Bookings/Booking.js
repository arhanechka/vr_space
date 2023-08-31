
import { useTranslation } from "react-i18next";

// BookingForm.js
import React, {useState} from 'react';
import './BookingForm.css'; // Import your CSS file
import Summary from './Summary';
import ContactDetails from './ContactDetails';
import ImportantInformation from './ImportantInformation';
import Checkout from './Checkout';


const Booking = (props) => {
const [userData, setUserData] = useState()

const handleUserData = (data) => {
    setUserData(data)
}

    return (
        <div className="booking-form">
          <div className="left-column">
            <ContactDetails handleUserData={handleUserData}/>
            <ImportantInformation />
            <Checkout/>
          </div>
          <div className="right-column">
            <Summary  bookingDetails={props.bookingDetails} userData={userData}/>
          </div>
        </div>
  );
};

export default Booking;

