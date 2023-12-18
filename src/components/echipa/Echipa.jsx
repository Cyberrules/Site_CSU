import React from 'react';
import "./Echipa.scss";
import GalerieStaff from './cardStaff/galerieStaff/GalerieStaff';
import LotJucatori from './lotJucatori/LotJucatori';
import GalerieImagini from './galerieImagini/GalerieImagini'



const Echipa = () => {
  return (
    <div className="echipa">
      <GalerieImagini/>
      <LotJucatori/>
      <GalerieStaff/>

    </div>
  );
};

export default Echipa;
