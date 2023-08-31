// ImportantInformation.js
import React, {useState}from 'react';
import './BookingForm.css'; // Import your CSS file

const ImportantInformation = () => {

    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleCheckboxChange = () => {
      setAgreeTerms(!agreeTerms);
    };

  return (
    <div className="important-information">
      <h2>Important Information</h2>
      <div className="important-info">
        <p>If you would like to book for under age 12, we can accommodate as low as age 9 with private sessions only. Email us at <a href="mailto:vrspace.pt@gmail.com">vrspace.pt@gmail.com</a></p>
      </div>
      <ul className="info-list">
          <li>The system support the use of glasses, but contact lenses are recommended.</li>
          <li>Refer to game packages for minimum age requirements.</li>
          <li>We will not permit players who are under the influence of drugs.</li>
          <li>We do not recommend our experiences for players who are pregnant, or who have a heart condition or seizure disorder.</li>
          <li>The purchasing customer is responsible for sharing the Terms and Conditions with other players in their booking.</li>
        </ul>
        <div className="checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={handleCheckboxChange}
          />
          I agree with Terms and Conditions
        </label>
      </div>
    </div>
  );
};

export default ImportantInformation;
