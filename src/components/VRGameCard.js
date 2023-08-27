import React from "react";
import "../VRGameCard.css"; // Import your custom CSS for styling

const VRGameCard = ({ imageSrc, title, description }) => {
  return (
    <div className="vr-game-card">
      <div
        className="game-card-image"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="game-title">{title}</h3>
        <p className="game-description">{description}</p>
      </div>
    </div>
  );
};

export default VRGameCard;
