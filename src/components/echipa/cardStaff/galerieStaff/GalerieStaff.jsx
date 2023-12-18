import React from 'react';
import CardAntrenor from '../cardAntrenor/CardAntrenor';
import CardEchipaStaff from '../cardEchipaStaff/CardEchipaStaff';

import './GalerieStaff.scss';

import imgAntrenor1 from '../../../assets/membriStaff/GeorgeMorari.png';
import imgStaff1 from '../../../assets/membriStaff/GeorgeMorari.png';
import imgStaff2 from '../../../assets/membriStaff/OctavianAndreica.png';
import imgStaff3 from '../../../assets/membriStaff/PetruGhervan.png';

const GalerieStaff = () => {

  
  const antrenori = [
     {
      imagine: imgAntrenor1,
      nume: 'Nume Antrenor',
      functie: 'Antrenor Principal',
    },
    {
      imagine: imgStaff3,
      nume: 'Nume Membru 1',
      functie: 'Antrenor',
    },
  
  ];
  

  const membriStaff = [
    {
      imagine: imgStaff1,
      nume: 'Nume Membru 1',
      functie: 'adas',
    },
    {
      imagine: imgStaff2,
      nume: 'Nume Membru 2',
      functie: 'Functia Membru 2',
    },
    {
      imagine: imgStaff3,
      nume: 'Nume Membru 3',
      functie: 'Functia Membru 3',
    },
    {
      imagine: imgStaff1,
      nume: 'Nume Membru 1',
      functie: 'Functia Membru 1',
    },
    {
      imagine: imgStaff2,
      nume: 'Nume Membru 2',
      functie: 'Functia Membru 2',
    },
    {
      imagine: imgStaff3,
      nume: 'Nume Membru 3',
      functie: 'Functia Membru 3',
    },
  ];

  return (
    <>
    <div className="titluStaff">STAFF TEHNIC</div>
    <div className="galerie-carduri">
      <div className="card-container">
        {antrenori.map((antrenor, index) => (
          <div className="card-antrenor" key={index}>
            <CardAntrenor {...antrenor} />
          </div>
        ))}
        <div className="carduri-staff">
          {membriStaff.map((membru, index) => (
            <div className="card-staff" key={index}>
              <CardEchipaStaff {...membru} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default GalerieStaff;
