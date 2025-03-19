import React from 'react';

const BuildingCard = ({ name, image }) => {
  return (
    <div className="building-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default BuildingCard;
