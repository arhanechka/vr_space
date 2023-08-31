import card from "../../assets/card.png"
import React from 'react';

import './BookingForm.css'; // Import your CSS file


const Checkout = (props) => {

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <img src={card} className="image" />

    </div>
  );
};

export default Checkout;
