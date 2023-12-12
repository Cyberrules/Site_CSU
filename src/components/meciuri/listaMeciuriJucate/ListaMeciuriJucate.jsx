import React, { useState, useEffect } from 'react';
import MeciuriJucate from '../meciuriJucate/MeciuriJucate';
import echipa1 from "../../assets/logoSponsori/logoUSV.png";
import echipa2 from "../../assets/logoSponsori/iuliusMallSuceava.png";

const ListaMeciuriJucate = () => {
  const [meciuri, setMeciuri] = useState([]);
  const [echipeDetails1, setEchipeDetails1] = useState({});
  const [echipeDetails2, setEchipeDetails2] = useState({});

  const fetchTeamDetails1 = (teamId1) => {
    fetch(`http://localhost:5050/api/echipa/${teamId1}`)
      .then(response => response.json())
      .then(echipaData => {
        setEchipeDetails1(prevDetails1 => ({
          ...prevDetails1,
          [`${teamId1}_nume`]: echipaData.nume
        }));
      })
      .catch(error => {
        console.error(`Error fetching team details for team ID ${teamId1}:`, error);
      });
  };
  
  const fetchTeamDetails2 = (teamId2) => {
    fetch(`http://localhost:5050/api/echipa/${teamId2}`)
      .then(response => response.json())
      .then(echipaData => {
        setEchipeDetails2(prevDetails2 => ({
          ...prevDetails2,
          [`${teamId2}_nume`]: echipaData.nume
        }));
      })
      .catch(error => {
        console.error(`Error fetching team details for team ID ${teamId2}:`, error);
      });
  };
  
  useEffect(() => {
    fetch('http://localhost:5050/api/meci/tip/Liga Zimbrilor')
      .then(response => response.json())
      .then(data => {
        setMeciuri(data);
        data.forEach(meci => {
          fetchTeamDetails1(meci.echipaid);
          fetchTeamDetails2(meci.adversarid);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const formatDate = (dateString) => {
    // Funcția pentru formatarea datei rămâne neschimbată
  };

  return (
    <div className='listaMeciuriContainer'>
      {meciuri.map((meci, index) => (
        <MeciuriJucate
          key={index}
          etapa={meci.tipcampionat}
          locatia={meci.locatie}
          data={formatDate(meci.datameci)}
          logoEchipa1={(meci.echipaid === 1) ? echipa1 : echipa2}
          numeEchipa1={echipeDetails1[`${meci.echipaid}_nume`]} 
          scorEchipa1={meci.scorechipa}
          logoEchipa2={(meci.adversarid === 1) ? echipa1 : echipa2} 
          numeEchipa2={echipeDetails2[`${meci.adversarid}_nume`]} 
          scorEchipa2={meci.scoradversar}
        />
      ))}
    </div>
  );
}

export default ListaMeciuriJucate;
