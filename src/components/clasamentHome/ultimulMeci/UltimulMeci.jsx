import React, { useState, useEffect } from 'react';
import '../../clasamentHome/ClasamentHome.scss';
import logo from '../../assets/img1.png';

const UltimulMeci = () => {

  const textUltimulMeci ={
    titlu: 'Ultimul meci',
    subtitlu: 'Handbal masculin',
    descriereLink: 'Galerie meci'
  }
  
  const [meciData, setMeciData] = useState(null);
  const [formattedDate, setFormattedDate] = useState('');
  const [formattedTime, setFormattedTime] = useState('');
  const [homeTeamName, setHomeTeamName] = useState('');
  const [awayTeamName, setAwayTeamName] = useState('');


  

  useEffect(() => {
    async function fetchMeciData() {
      try {
        const response = await fetch('http://localhost:5050/api/meci/ultimulmeci');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMeciData(data);

        if (data && data.datameci) {
          const dateTime = new Date(data.datameci);
          const date = dateTime.toLocaleDateString('ro-RO');
          const hours = dateTime.getHours().toString().padStart(2, '0');
          const minutes = dateTime.getMinutes().toString().padStart(2, '0');
          const time = `${hours}:${minutes}`;
          setFormattedDate(date);
          setFormattedTime(time);

          const homeTeamResponse = await fetch(`http://localhost:5050/api/echipa/${data.echipaid}`);
          if (homeTeamResponse.ok) {
            const homeTeamData = await homeTeamResponse.json();
            setHomeTeamName(homeTeamData.nume);
          }

          const awayTeamResponse = await fetch(`http://localhost:5050/api/echipa/${data.adversarid}`);
          if (awayTeamResponse.ok) {
            const awayTeamData = await awayTeamResponse.json();
            setAwayTeamName(awayTeamData.nume);
          }
        }
        
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    }

    fetchMeciData();
  }, []);


  const {
    scorechipa,
    scoradversar,
  } = meciData || {};
  
  return (
    <div className="meci-trecut">
      <div className="title-container">
        <p className="ultimul-meci">{textUltimulMeci.titlu}</p>
        <p className="liga-text">{textUltimulMeci.subtitlu}</p>
      </div>
      <div className="data-container">
        <div className="header-data">
          <img className="logo-liga" src={logo} alt=""></img>
          <p className="data-meci">{formattedDate} | {formattedTime}</p>
        </div>
        <div className="middle-data">
          <div className="echipaAcasa">
            <p className="nume-echipa">{homeTeamName}</p>
            <p className="scor-echipa">{scorechipa}</p>
          </div>
          <div className="echipaDeplasare">
            <p className="nume-echipa">{awayTeamName}</p>
            <p className="scor-echipa">{scoradversar}</p>
          </div>
        </div>
        <div className="bottom-data">
          <p className="galerie-meci">
          {textUltimulMeci.descriereLink} <span className="arrow">&#x2192;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UltimulMeci;
