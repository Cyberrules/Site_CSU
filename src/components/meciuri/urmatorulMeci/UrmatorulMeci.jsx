import React from 'react';
import './UrmatorulMeci.scss';


import imgLogo1 from "../../assets/logoSponsori/logoUSV.png"
import imgLogo2 from "../../assets/logoSponsori/iuliusMallSuceava.png"


const UrmatorulMeci = () => {

  const textUrmatorulMeci= {
    titlu: 'Următorul meci',
    vs: 'VS',
    ora: 'Ora:',
    separator: '|',
    data: 'Data:',
    liga: 'Liga Națională de handbal masculin',
    locatia: 'Locație:',
    dataMeciului:'15 decembrie 2023',
    oraMeciului:'18:00',
    locatiaMeciului: 'Stadionul X',
    etapaMeciului: 'Etapa Y',
    numeEchipa1: 'Echipa 1',
    numeEchipa2: 'Echipa 2'
  }

   
  
    return (

    <div className='imaginePromoMeci'>

        <h2 className='descriereMeciUrmator'>{textUrmatorulMeci.titlu}</h2>

        <div className='anuntMeci'>
          <div className='logo-echipe'>
              <img src={imgLogo1} alt="Logo 1" className="logo1" />
              <div className='vs'>{textUrmatorulMeci.vs}</div>
              <img src={imgLogo2} alt="Logo 2" className="logo2" />
          </div>
  
          <div className='informatii-meci'>
            <div className='info-top'>
                <div className='ora-data'>
                {textUrmatorulMeci.ora} {textUrmatorulMeci.oraMeciului} {textUrmatorulMeci.separator} {textUrmatorulMeci.data} {textUrmatorulMeci.dataMeciului}
                </div>
            </div>


              <div className='echipe'>
                {textUrmatorulMeci.numeEchipa1} - {textUrmatorulMeci.numeEchipa2}
            </div>

            <div className='ligaNadionala'>{textUrmatorulMeci.liga}</div>
              <div className='etapaMeci'> {textUrmatorulMeci.etapaMeciului}</div>
              <div className='locatieMeci'>{textUrmatorulMeci.locatia} {textUrmatorulMeci.locatiaMeciului}</div>
          </div>
  
          <div className='design'></div>
        </div>

    </div>
    );
  };
  
  export default UrmatorulMeci;
  
