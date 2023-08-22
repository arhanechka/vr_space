import React from 'react';
import VRGameCard from './VRGameCard'; // Import the VRGameCard component
import saber from "../assets/games/saber.avif"
import cubizm from '../assets/games/cubizm.jpeg'
import among from '../assets/games/among.jpeg'
import drums from '../assets/games/drums.jpeg'
import one from '../assets/games/one.jpeg'
import skiing from '../assets/games/skiing.jpeg'




const games = [
    {
      title: '',
      imageSrc: `${saber}`,
      description: '',
    },
    {
        title: '',
        imageSrc: `${cubizm}`,
        description: '',
    },
    {
        title: '',
        imageSrc: `${among}`,
        description: '',
    },
    {
        title: '',
        imageSrc: `${drums}`,
        description: '',
      },
      {
        title: '',
        imageSrc: `${one}`,
        description: '',
    },
      {
        title: '',
        imageSrc: `${skiing}`,
        description: '',
    },
          ]
const VRGameList = () => {
    const rows = [];
  for (let i = 0; i < games.length; i += 3) {
    rows.push(games.slice(i, i + 3));
  }
  return (
    <div className="center-content">
        <h1 className="display-2">Best VR Games</h1>
        <p className="display-3">Discover a world of excitement and immersion with our collection of captivating VR games. Each game is meticulously crafted to deliver unparalleled experiences that challenge your senses and imagination.</p>
     
    <div className="vr-game-list">
    {rows.map((row, rowIndex) => (
      <div className="vr-game-row" key={rowIndex}>
        {row.map((game, index) => (
          <VRGameCard
            key={index}
            title={game.title}
            imageSrc={game.imageSrc}
            description={game.description}
          />
        ))}
      </div>
    ))}
  </div>
  </div>

  );
}

export default VRGameList;
