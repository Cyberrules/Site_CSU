import React from 'react';
import './CardNoutati.scss';

const CardNoutati = ({ stire }) => {
  const { imagine, titlu, continut } = stire;

  return (
    <div className="m-4">
      <div className="card">
        <div className='imagineCard'>
          <img src={imagine} alt="imagine" className="card-img-top" />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{titlu}</h5>
          <p className="card-text">{continut}</p>
          <a href="#" className="btn button_news ">
            Afla mai multe →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardNoutati;
