import React from 'react';
import './Stire.scss';

const Stire = ({ titlu, descriere, imagine }) => {
  return (
    <div className='stire'>
      <div className="stire-item">
        <button className='buton-dreapta'>Share</button>
        <h4>{titlu}</h4>
        <p>{descriere}</p>
        <div className="centered-image">
          <img className='imagineHome' src={imagine} alt={`Imagine`} />
        </div>
      </div>
    </div>
  );
};

export default Stire;
