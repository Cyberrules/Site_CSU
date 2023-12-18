import React from 'react';
import './CardEchipaStaff.scss';

const CardEchipaStaff = ({ imagine, nume, functie }) => {
  return (
    <div className="card-staff">
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

export default CardEchipaStaff;
