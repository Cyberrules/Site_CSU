import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PrezentareJucator.scss';

const PrezentareJucator = () => {
  const { playerId } = useParams();

  const textPrezentareJucator ={
    dataNastere: 'Data Nașterii:',
    nationalitate: 'Naționalitate:',
    pozitie: 'Poziție:',
    inaltime: 'Înălțime:',
    unitateMasura: 'cm',
    numar: 'Număr:',
    mesaj: ' ',
  }

  const [playerDetails, setPlayerDetails] = useState(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5050/api/jucator/${playerId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPlayerDetails(data);
      } catch (error) {
        console.error('A apărut o eroare:', error);
      }
    };
    fetchPlayerDetails();
  }, [playerId]);

  const convertToLowerCase = (text) => {
    return text.toLowerCase();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  

  return (
    <div className='container-prezentare'>
    <div className="player-details">
      {playerDetails !== null ? (
        <div>
          <div className="player-info">
            <h2>{`${playerDetails.nume} ${playerDetails.prenume}`}</h2>
            <p>{textPrezentareJucator.dataNastere} {formatDate(playerDetails.dataNasterii)}</p>
            <p>{textPrezentareJucator.nationalitate} {convertToLowerCase(playerDetails.nationalitate)}</p>
            <p>{textPrezentareJucator.pozitie} {convertToLowerCase(playerDetails.pozitie)}</p>
            <p>{textPrezentareJucator.inaltime} {playerDetails.inaltime} {textPrezentareJucator.unitateMasura}</p>
            <p>{textPrezentareJucator.numar} {playerDetails.numar}</p>
          </div>
          {playerDetails.imagine && (
            <div className="player-image">
              <img
                src={`data:image/png;base64,${playerDetails.imagine}`}
                alt={`${playerDetails.nume} ${playerDetails.prenume}`}
              />
            </div>
          )}
        </div>
      ) : (
        <p>{textPrezentareJucator.mesaj}</p>
      )}
    </div>
    </div>
  );
}
  

export default PrezentareJucator;
