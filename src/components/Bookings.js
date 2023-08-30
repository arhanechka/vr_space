import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../CustomCalendar.css'; // Import your custom CSS
import './Advertisement/advertisement.css';
import image from "../assets/cal.png";
import { useTranslation } from "react-i18next";


function Booking(props) {
  const { t } = useTranslation();
  const [date, setDate] = useState(new Date());
  const minSelectableDate = new Date();
  return (
    <div className="flex-container" style={{marginTop:"50px"}}>
    <div className="image-block">
          <img src={image} alt="Image" />
        </div>
    <div className="text-block">

    <h2 className="display-4">Book your game for {date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
    <div className="calendar-container">
      <Calendar value={date} onChange={setDate} minDate={minSelectableDate} />
      <div className="bookButton"
      onClick={()=>props.routeChange(props.path)}
      >
          <a href="#">{t("booknow")}</a>
        </div>
    </div>
    </div>
  </div>


   
  );
  
}
export default Booking;