import React, { useState, useEffect } from 'react';
import MeciuriJucate from '../meciuriJucate/MeciuriJucate';
import echipa1 from '../../assets/logoSponsori/logoUSV.png';
import echipa2 from '../../assets/logoSponsori/iuliusMallSuceava.png';

const ListaMeciuriJucate = () => {
  const textShowMore= 'Show More';

  const [meciuri, setMeciuri] = useState([]);
  const [echipeDetails, setEchipeDetails] = useState({});
  const [showAll, setShowAll] = useState(false);

  const fetchTeamDetails = (teamId) => {
    fetch(`http://localhost:5050/api/echipa/${teamId}`)
      .then((response) => response.json())
      .then((echipaData) => {
        console.log(`Detalii echipa ${teamId}:`, echipaData);
        setEchipeDetails((prevDetails) => ({
          ...prevDetails,
          [`${teamId}_nume`]: echipaData.nume,
        }));
      })
      .catch((error) => {
        console.error(`Error extragere date despre echipa in functie de ID ${teamId}:`, error);
      });
  };

  useEffect(() => {
    fetch('http://localhost:5050/api/meci/tip/Liga Zimbrilor')
      .then((response) => response.json())
      .then((data) => {
        setMeciuri(data.reverse().slice(0, 3)); 
        data.forEach((meci) => {
          fetchTeamDetails(meci.echipaid);
          fetchTeamDetails(meci.adversarid);
        });
      })
      .catch((error) => {
        console.error('Error extragere date:', error);
      });
  }, []);

  const formatDate = (dateString) => {
    const months = [
      'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
      'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie',
    ];
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleShowAll = () => {
    setShowAll(true); 
  };

  return (
    <div>
      <div className="listaMeciuriContainer">
        {meciuri.map((meci, index) => (
          <MeciuriJucate
            key={index}
            etapa={meci.tipcampionat}
            locatia={meci.locatie}
            data={formatDate(meci.datameci)}
            logoEchipa1={meci.echipaid === 1 ? echipa1 : echipa2}
            numeEchipa1={echipeDetails[`${meci.echipaid}_nume`]}
            scorEchipa1={meci.scorechipa} 
            logoEchipa2={meci.adversarid === 1 ? echipa1 : echipa2}
            numeEchipa2={echipeDetails[`${meci.adversarid}_nume`]}
            scorEchipa2={meci.scoradversar} 
          />
        ))}
      </div>
      {!showAll && meciuri.length < meciuri.length && (
        <button onClick={handleShowAll}>{textShowMore}</button>
      )}
    </div>
  );
};

export default ListaMeciuriJucate;
