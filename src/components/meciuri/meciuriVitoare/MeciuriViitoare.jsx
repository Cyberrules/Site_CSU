import React from 'react';
import "./MeciuriViitoare.scss";
import logoLiga from '../../assets/logoLiga.png';

const MeciuriViitoare = ({ etapa, locatia, data, numeEchipa1, logoEchipa1, logoEchipa2, numeEchipa2, ora }) => {
  return (
    <div className='containerMeciuriViitoare'>
      <div className='cardMeciuriViitoare'>
      <div className='logoContainerViitoare'>
          <img src={logoLiga} alt='Logo' className='logoLigaViitorare' />
        </div>

        <div className='infoContainer'>
          <p>{etapa}</p>
          <p>{locatia}</p>
        </div>

        <div className='bara-verticala-viitoare'></div>

        <div className='infoData'>
          <p>{data}</p>
        </div>

        <div className='elementeMeciuri'>
          <div className='logoEchipe'>
            <p className='numeEchipaGazda'>{numeEchipa1}</p>
            <img src={logoEchipa1} alt='Logo' className='logoLigaMeciViitor' />
          </div>
          <div className='separator'>VS</div>
          <div className='logoEchipe'>
            <img src={logoEchipa2} alt='Logo' className='logoLigaMeciViitor' />
            <p className='numeEchipaOaspete'>{numeEchipa2}</p>
          </div>
        </div>

        <div className='ora'>{ora}</div>
      </div>
    </div>
  );
};

export default MeciuriViitoare;
