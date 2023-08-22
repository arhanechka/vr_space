import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../CustomCalendar.css'; // Import your custom CSS


function Booking() {
  const [date, setDate] = useState(new Date());
  const minSelectableDate = new Date();
  return (
    <div className="center-content">

    <div className="calendar-center">

    <div className="calendar-container">
      <h2 className="display-4">Book your game for {date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
      <Calendar value={date} onChange={setDate} minDate={minSelectableDate} />
    </div>
    </div>
    </div>
  );
  
}
export default Booking;