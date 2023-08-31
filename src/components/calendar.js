import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../CustomCalendar.css'; // Import your custom CSS
import './Advertisement/advertisement.css';
import image from "../assets/cal.png";
import { useTranslation } from "react-i18next";
import TimeSlots from './Bookings/TimeSlots'; 
function Booking(props) {
  const { t } = useTranslation();
  const [date, setDate] = useState();
  const [selectedValue, setSelectedValue] = useState('1'); 
  const [slot, setSelectedSlot] = useState(); 
  const [isDataCompleted, setIsDataCompleted] = useState()

  const minSelectableDate = new Date();
  console.log(date)


  const handlePersonsChange = (event) => {
    setSelectedValue(event.target.value); 
  };

  const handleTimeChange = (time) => {
    if (selectedValue && date){
      console.log("setting time")
      console.log(time)
      setSelectedSlot(time); 
      setIsDataCompleted(true)
      props.updateBooking(selectedValue, date, time)
    }
  };

  return (
    <div className="flex-container" style={{marginTop:"50px", height: "auto"}}>
    <div className="image-block">
          <img src={image} alt="Image" />
        </div>
    <div className="text-block">

    <h2 className="display-2">Book your game</h2>
    <div className="calendar-container">
    <div className="number-select-block">
  <label htmlFor="numberOfPeople">Number of people</label>
  <select id="numberOfPeople" className="number-select" value={selectedValue} onChange={handlePersonsChange}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
    </div>
      <Calendar value={date} onChange={setDate} minDate={minSelectableDate} />
      {date && 
      <TimeSlots handleTimeChange={handleTimeChange}/> 
}
      <div className="bookButton"
      onClick={() => isDataCompleted ? props.routeChange("/booking") : alert("Please add your parameters")} // Используйте тернарный оператор
      disabled={!date}
      >
          <a>{t("booknow")}</a>
        </div>
    </div>
    </div>
  </div>
  );
  
}
export default Booking;