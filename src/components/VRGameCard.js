import React from 'react';
import '../VRGameCard.css'; // Import your custom CSS for styling

const VRGameCard = ({ imageSrc, title, description }) => {

  return (
    <div className="vr-game-card">
      <div style = {{
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '50vh',
    height: '30vh',
  }} >
      <h3 className="game-title">{title}</h3>
      <p className="game-description">{description}</p>
      </div>
    </div>
  );
}

export default VRGameCard;
