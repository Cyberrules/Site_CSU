import React from 'react';
import MeciuriJucate from '../meciuriJucate/MeciuriJucate';

import echipa1 from "../../assets/logoSponsori/logoUSV.png"
import echipa2 from "../../assets/logoSponsori/iuliusMallSuceava.png"

const ListaMeciuriJucate = () => {
  const meciuri = [
    {
      "etapa": "Etapa 1",
      "locatia": "Stadionul A",
      "data": "3 februarie 2023",
      "echipe": [
        {
          "logo": echipa1,
          "nume": "Echipa A",
          "scor": 15
        },
        {
          "logo": echipa2,
          "nume": "Echipa B",
          "scor": 10
        }
      ]
    },
    {
      "etapa": "Etapa 2",
      "locatia": "Stadionul B",
      "data": "10 februarie 2023",
      "echipe": [
        {
          "logo": echipa2,
          "nume": "Echipa C",
          "scor": 20
        },
        {
          "logo": echipa1,
          "nume": "Echipa D",
          "scor": 18
        }
      ]
    },
    {
      "etapa": "Etapa 3",
      "locatia": "Stadionul C",
      "data": "17 februarie 2023",
      "echipe": [
        {
          "logo": echipa1,
          "nume": "Echipa E",
          "scor": 12
        },
        {
          "logo": echipa2,
          "nume": "Echipa F",
          "scor": 16
        }
      ]
    }
  ];

  return (
    <div className='listaMeciuriContainer'>
      {meciuri.map((meci, index) => (
        <MeciuriJucate
          key={index}
          etapa={meci.etapa}
          locatia={meci.locatia}
          data={meci.data}
          logoEchipa1={meci.echipe[0].logo}
          numeEchipa1={meci.echipe[0].nume}
          scorEchipa1={meci.echipe[0].scor}
          logoEchipa2={meci.echipe[1].logo}
          numeEchipa2={meci.echipe[1].nume}
          scorEchipa2={meci.echipe[1].scor}
        />
      ))}
    </div>
  );
};

export default ListaMeciuriJucate;
