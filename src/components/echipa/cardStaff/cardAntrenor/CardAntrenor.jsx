import React from 'react'
import "./CardAntrenor.scss"

const CardAntrenor = ({ imagine, nume, functie }) => {
  return (
    <div className="card-antrenor">
      <div className="card">
        <img src={imagine} alt={nume} />
        <div className="text-container">
          <h3>{nume}</h3>
          <p>{functie}</p>
        </div>
      </div>
    </div>
  );
};

export default CardAntrenor
