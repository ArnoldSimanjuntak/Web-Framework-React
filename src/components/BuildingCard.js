// src/components/BuildingCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuildingCard = ({ id, name, image }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/building/${id}`);
  };
  
  return (
    <div className="building-card" onClick={handleClick}>
      <img 
        src={image} 
        alt={name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/assets/images/default-building.jpg';
        }}
      />
      <h3>{name}</h3>
    </div>
  );
};

export default BuildingCard;