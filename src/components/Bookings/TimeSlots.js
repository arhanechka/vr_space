import React, { useState } from 'react';
import './TimeSlots.css';

const TimeSlots = () => {
  const [bookedTime, setBookedTime] = useState(null);

  const setActive = (time) => {
    setBookedTime(time);
  };

  const timeSlots = [];

  for (let hour = 2; hour <= 10; hour++) {
    timeSlots.push(
      <div
        className={`time-slot ${bookedTime === hour ? 'active' : ''}`}
        key={hour}
        onClick={() => setActive(hour)}
      >
        {hour < 10 ? `0${hour}` : hour}:00
      </div>
    );
    timeSlots.push(
      <div
        className={`time-slot ${bookedTime === `${hour}-30` ? 'active' : ''}`}
        key={`${hour}-30`}
        onClick={() => setActive(`${hour}-30`)}
      >
        {hour < 10 ? `0${hour}` : hour}:30
      </div>
    );
  }

  return <div className="time-slots-container">{timeSlots}</div>;
};

export default TimeSlots;
