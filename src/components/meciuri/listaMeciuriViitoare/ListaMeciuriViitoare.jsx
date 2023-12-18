import React from 'react';
import MeciuriViitoare from '../meciuriVitoare/MeciuriViitoare';
import "./ListaMeciuriViitoare.scss"


import echipa1 from "../../assets/logoSponsori/logoUSV.png"
import echipa2 from "../../assets/logoSponsori/iuliusMallSuceava.png"

const ListaMeciuriViitoare = () => {
  const meciuri = [
    {
      "etapa": "Etapa 1",
      "locatia": "Stadionul A",
      "dataMeci": "8 februarie 2023",
      "ora":"08:00",
      "echipe": [
        {
          "logo": echipa1,
          "nume": "Echipa A",
        },
        {
          "logo": echipa2,
          "nume": "Echipa B",
        }
      ]
    },
    {
      "etapa": "Etapa 2",
      "locatia": "Stadionul B",
      "dataMeci": "12 martie 2023",
      "ora":"12:30",
      "echipe": [
        {
          "logo": echipa2,
          "nume": "Echipa C",
        },
        {
          "logo": echipa1,
          "nume": "Echipa D",
        }
      ]
    },
    {
      "etapa": "Etapa 3",
      "locatia": "Stadionul C",
      "dataMeci": "17 februarie 2023",
      "ora":"15:00",
      "echipe": [
        {
          "logo": echipa1,
          "nume": "Echipa E",
        },
        {
          "logo": echipa2,
          "nume": "Echipa F",
        }
      ]
    }
  ];

  return (
    <div className='listaMeciuriViitoareContainer'>
      {meciuri.map((meci, index) => (
        <MeciuriViitoare
          key={index}
          etapa={meci.etapa}
          locatia={meci.locatia}
          data={meci.dataMeci}
          logoEchipa1={meci.echipe[0].logo}
          numeEchipa1={meci.echipe[0].nume}
          logoEchipa2={meci.echipe[1].logo}
          numeEchipa2={meci.echipe[1].nume}
          ora={meci.ora}
        />
      ))}
    </div>
  );
};

export default ListaMeciuriViitoare;
