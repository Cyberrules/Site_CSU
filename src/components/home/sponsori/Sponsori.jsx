import React/*, { useState, useEffect }*/ from 'react';
import './Sponsori.scss'; 

import logo1 from '../../assets/logoSponsori/primariaSuceava.png';
import logo2 from '../../assets/logoSponsori/logoUSV.png';
import logo3 from '../../assets/logoSponsori/celestin.png';
import logo4 from '../../assets/logoSponsori/iuliusMallSuceava.png';
import logo5 from '../../assets/logoSponsori/pepenero.png';
import logo6 from '../../assets/logoSponsori/vivendi.png';
import logo7 from '../../assets/logoSponsori/mihu.png';
import logo8 from '../../assets/logoSponsori/fiterman.png';

const companii = [
  {
    nume: 'Primaria Suceava',
    logoUrl: logo1,
    websiteUrl: 'https://evp.primariasv.ro/dm_suceava/site.nsf/pagini/prima+pagina-0001220E',
  },
  {
    nume: 'USV',
    logoUrl: logo2,
    websiteUrl: 'https://usv.ro/',
  },
  {
    nume: 'Celestin',
    logoUrl: logo3,
    websiteUrl: 'https://www.tipografiacelestin.ro/',
  },
  {
    nume: 'Iulius Mall',
    logoUrl: logo4,
    websiteUrl: 'https://suceava.iuliusmall.com/',
  },
  {
    nume: 'Pepenero',
    logoUrl: logo5,
    websiteUrl: 'https://pepeneropizza.ro/',
  },
  {
    nume: 'Vivendi',
    logoUrl: logo6,
    websiteUrl: 'https://restaurantvivendi.ro/',
  },
  {
    nume: 'Mihu',
    logoUrl: logo7,
    websiteUrl: 'https://www.acoperisuri-mihu.ro/',
  },
  {
    nume: 'Fiterman Pharma',
    logoUrl: logo8,
    websiteUrl: 'https://www.fitermanpharma.ro/',
  },
  
];

const Sponsori = () => {

/*
  const [sponsorData, setSponsorData] = useState([]);

  useEffect(() => {
    fetch('https://..../sponsori')
      .then((response) => response.json())
      .then((data) => setSponsorData(data))
      .catch((error) => console.error('Eroare în obținerea datelor sponsorilor:', error));
  }, []);
*/

  const handleLogoClick = (websiteUrl) => {
    window.open(websiteUrl, '_blank');
  };

  return (
    <div className="logo-list">
      {/*sponsorData.map....*/ companii.map((company, index) => (
        <div key={index} className="logo-item">
          <img
            src={company.logoUrl}
            alt={company.nume}
            className='logoSponsor'
            onClick={() => handleLogoClick(company.websiteUrl)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      ))}
    </div>

  );
};

export default Sponsori;
