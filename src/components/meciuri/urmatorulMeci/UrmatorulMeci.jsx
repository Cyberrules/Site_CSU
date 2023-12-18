import React, { useState, useEffect } from 'react';
import './UrmatorulMeci.scss';


import imgLogo1 from "../../assets/logoSponsori/logoUSV.png"
import imgLogo2 from "../../assets/logoSponsori/iuliusMallSuceava.png"


const UrmatorulMeci = () => {


    const dataMeciului = "15 decembrie 2023";
    const oraMeciului = "18:00";
    const locatiaMeciului = "Stadionul X";
    const etapaMeciului = "Etapa Y";
    const numeEchipa1 = "Echipa 1";
    const numeEchipa2 = "Echipa 2";
  
    return (

    <div className='imaginePromoMeci'>

        <h2 className='descriereMeciUrmator'>Următorul meci</h2>

        <div className='anuntMeci'>
          <div className='logo-echipe'>
              <img src={imgLogo1} alt="Logo 1" className="logo1" />
              <div className='vs'>VS</div>
              <img src={imgLogo2} alt="Logo 2" className="logo2" />
          </div>
  
          <div className='informatii-meci'>
            <div className='info-top'>
                <div className='ora-data'>
                    Ora: {oraMeciului} | Data: {dataMeciului}
                </div>
            </div>


              <div className='echipe'>
                {numeEchipa1} - {numeEchipa2}
            </div>

            <div className='ligaNadionala'>Liga Națională de handbal masculin</div>
              <div className='etapaMeci'> {etapaMeciului}</div>
              <div className='locatieMeci'>Locație: {locatiaMeciului}</div>
          </div>
  
          <div className='design'></div>
        </div>

    </div>
    );
  };
  
  export default UrmatorulMeci;
  
