import React, { useState } from 'react';
import './TimeSlots.css';

const TimeSlots = (props) => {
  const [bookedTime, setBookedTime] = useState(null);

  const handleChoice = (time) => {
    setBookedTime(time)
    props.handleTimeChange(time)
  }

  const timeSlots = [];

  for (let hour = 2; hour <= 10; hour++) {
    timeSlots.push(
      <div
        className={`time-slot ${bookedTime === hour ? 'active' : ''}`}
        key={hour}
        onClick={() => {handleChoice(hour); console.log("active");}}
      >
        {hour < 10 ? `0${hour}` : hour}:00
      </div>
    );
    timeSlots.push(
      <div
        className={`time-slot ${bookedTime === `${hour}-30` ? 'active' : ''}`}
        key={`${hour}-30`}
        onClick={() => handleChoice(`${hour}-30`)}
      >
        {hour < 10 ? `0${hour}` : hour}:30
      </div>
    );
  }

  return <div className="time-slots-container">{timeSlots}</div>;
};

export default TimeSlots;
