import React from 'react';
import './CardNoutati.scss';

const CardNoutati = ({ stire }) => {
  const { imagine, titlu, continut } = stire;
  const textLink= 'Afla mai multe →';

  const handleRedirect = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <div className="card">
        <div className='imagineCard'>
          <img src={imagine} alt="imagine" className="card-img-top" />
        </div>
        <div className="continutText">
          <h5 className="titluStire">{titlu}</h5>
          <p className="continutStire">{continut}</p>
          <button className="butonLink" onClick={handleRedirect}>
            {textLink}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardNoutati;
