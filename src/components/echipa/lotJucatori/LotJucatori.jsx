import React, { useState, useEffect } from 'react';
import "./LotJucatori.scss";
import CardJucatori from "../cardJcatori/CardJucatori";

const LotJucatori = ({ editieSelectata }) => {

  const textLotJucatori ={
    titlu: 'LOT JUCATORI',
    mesajEroare: 'Nu există date despre echipă pentru anul selectat.'
  }
  
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [positions, setPositions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [hasPlayers, setHasPlayers] = useState(true); 

  const categoria = 'Adulti';
  const echipa = 'CSU Suceava';

  const fetchData = async (selectedEdition) => {
    try {
      const response = await fetch(`http://localhost:5050/api/jucator/echipa/${echipa}/editia/${selectedEdition}/categoria/${categoria}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const playerPositions = data.map(item => item.pozitie);
      const uniquePositions = Array.from(new Set(playerPositions));
      data.forEach(player => {
        const date = new Date(player.dataNasterii);
        const formattedDate = date.toLocaleDateString('ro-RO', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });
        player.dataNasterii = formattedDate;
      });

      setPositions(uniquePositions);
      setData(data);
      setHasPlayers(data.length > 0); 
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  useEffect(() => {
    if (editieSelectata) {
      fetchData(editieSelectata);
    }
  }, [editieSelectata]);

  const toggleVisibility = (position) => {
    if (selectedPosition === position) {
      setSelectedPosition('');
      setFilteredData([]);
    } else {
      const filtered = data.filter(item => item.pozitie.toLowerCase() === position.toLowerCase());
      setFilteredData(filtered);
      setSelectedPosition(position);
    }
  };

  const sortPlayersByImage = (players) => {
    const playersWithImage = players.filter(player => player.imagine);
    const playersWithoutImage = players.filter(player => !player.imagine);
    return [...playersWithImage, ...playersWithoutImage];
  };

  return (
    <div>
      <div className="jucatoriContainer">
        <div className="titluJucatori">{textLotJucatori.titlu}</div>
        <div className="containerButton">
          {positions.map((position, index) => (
            <button
              key={index}
              className={`butonEchipa ${selectedPosition === position ? 'selected' : ''}`}
              onClick={() => toggleVisibility(position)}
            >
              {position.toUpperCase()}
            </button>
          ))}
        </div>
        {hasPlayers && filteredData.length > 0 && ( 
          <div className="playercontainer">
            <div className="playercards">
              {sortPlayersByImage(filteredData).map((item, index) => (
                <div className="playercard" key={index}>
                  <CardJucatori player={item} />
                </div>
              ))}
            </div>
          </div>
        )}
        {!hasPlayers && ( 
          <div className='textInfo'>{textLotJucatori.mesajEroare}</div>
        )}
      </div>
    </div>
  );
};

export default LotJucatori;
