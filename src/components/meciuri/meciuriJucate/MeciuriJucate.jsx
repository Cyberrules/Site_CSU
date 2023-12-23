import React from 'react';
import './MeciuriJucate.scss';
import logoLiga from '../../assets/logoLiga.png';

const MeciuriJucate = ({
  data,
  etapa,
  locatia,
  logoEchipa1,
  numeEchipa1,
  scorEchipa1,
  logoEchipa2,
  numeEchipa2,
  scorEchipa2,
}) => {

  const raportMeci= 'Raport Meci';
  return (
    <div className='containerMeciuriJucate'>
      <div className='cardMeciuriJucate'>
        <div className='logoContainerJucate'>
          <img src={logoLiga} alt='Logo' className='logoLigaJucate' />
        </div>

        <div className='infoContainerJucate'>
          <p>{etapa}</p>
          <p>{locatia}</p>
        </div>

        <div className='bara-verticalaJucate'></div>

        <div className='infoDataJucate'>
          <p>{data}</p>
        </div>

        <div className='elementeJucate'>
          <div className='logoEchipeJucate'>
            <p className='echipaGazdaJucate'>{numeEchipa1}</p>
            <img src={logoEchipa1} alt='Logo' className='logoEchipeMeciJucate' />
          </div>
          <div className='scorMeciJucate'>{scorEchipa1}</div>
          <div className='bara-orizontalaJucate'></div>
          <div className='scorMeciJucate'>{scorEchipa2}</div>
          <div className='logoEchipeJucate'>
            <img src={logoEchipa2} alt='Logo' className='logoEchipeMeciJucate' />
            <p className='echipaOaspeteJucate'>{numeEchipa2}</p>
          </div>
        </div>

        <button className='raportMeciJucate'>{raportMeci}</button>
      </div>
    </div>
  );
};

export default MeciuriJucate;
