// Summary.js
import './BookingForm.css'; // Import your CSS file
import React, { useEffect, useState } from 'react';

const Summary = (props) => {
    const [date, setDate] = useState()
    const [time, setTime] = useState()

    useEffect(()=>{
        setDate(props.bookingDetails.date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) )
        if (props.bookingDetails.slot.length>1){
        setTime(props.bookingDetails.slot.replace("-",":"))
        }
        else
        setTime(`${props.bookingDetails.slot}:00`)
    })

    useEffect(()=>{
        console.log(props.bookingDetails)
        console.log(props.userData)
    },[])
  return (
    <div className="summary">
      <h2>SUMMARY</h2>
      <div className="summary-content">
        <div className="summary-section">
          <h3>Venue</h3>
          <p>VR Space</p>
          <p>Francisco Xsavier 5</p>
          <p>Setubal</p>
        </div>
        {props.bookingDetails &&
        <div className="summary-section">
          <h4>Players: {props.bookingDetails.players}</h4>
          <h4>Date: {date}</h4>
          <h4>Time: {time}</h4>
        </div>
}
        {props.userData && 
        <div className="summary-section">
          <h4>Your email: {props.userData.email}</h4>
          <h4>Your name: {props.userData.fullName}</h4>
          <h4>Your phone: {props.userData.phoneNumber}</h4>
        </div>
}
        <div className="checkoutButton"
      onClick={()=>{}}
      >
          <a>Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default Summary;
