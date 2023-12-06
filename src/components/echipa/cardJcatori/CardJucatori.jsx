import React from 'react';
import './CardJucatori.scss';

import steag from "../../assets/steag.png"

const CardJucatori = ({ player }) => {
  const { nume, pozitie, nationalitate, dataNastere, inaltime, imagine } = player;

  return (
    <div className="wrapper-team">
      <figure className="image-block">
      <div className="steag">
          <img src={steag} alt="steag" />
        </div>
        <img src={imagine} alt="imagine" />
        <figcaption>
          <h3>{nume}</h3>
          <p>Pozitie: {pozitie}</p>
          <p>Romania: {nationalitate}</p>
          <p>Data nasterii: {dataNastere}</p>
          <p>Inaltime: {inaltime}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default CardJucatori;
