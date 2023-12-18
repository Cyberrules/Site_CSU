/*   MAP -- JSON*/

import React, { useState, useEffect } from 'react';
import './EchipaJuniori.scss';
import arrow from '../../assets/juniori/arrow.png';

const EchipaJuniori = ({ numeEchipa }) => {
  const [hideDiv, setHideDiv] = useState(false);
  const [jucatori, setJucatori] = useState([]);

  const jucatoriJson = [
    {
      name: 'Jucător 1',
      position: 'Centrali',
      echipa: 'U16'
    },
    {
      name: 'Jucător 2',
      position: 'Portar',
      echipa: 'U18'
    },
    {
      name: 'Jucător 3',
      position: 'Extreme',
      echipa: 'U20'
    },
  ];

  useEffect(() => {
    const filteredPlayers = jucatoriJson.filter((player) => player.echipa === numeEchipa);
    setJucatori(filteredPlayers);
  }, [numeEchipa]);

  const showHide = () => {
    setHideDiv(!hideDiv);
  };

  const order = ['Portar', 'Interi', 'Extreme', 'Centrali', 'Pivoti'];

  const groupedPlayers = jucatori.reduce((acc, player) => {
    const positionIndex = order.indexOf(player.position);
    if (positionIndex !== -1) {
      if (!acc[positionIndex]) {
        acc[positionIndex] = [];
      }
      acc[positionIndex].push(player);
    }
    return acc;
  }, []);

  order.forEach((category, index) => {
    if (!groupedPlayers[index]) {
      groupedPlayers[index] = [];
    }
  });

  return (
    <div>
      <div className="juniori1" onClick={showHide}>
        <div className="drop-section">
          <div className="nume-echipa">Echipa {numeEchipa}</div>
          <div className="drop-arrow">
            <img
              src={arrow}
              alt=""
              className='drop-arrow'
              style={{ transform: hideDiv ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </div>
        </div>
        {hideDiv && (
          <div className="info-jucatori">
            {groupedPlayers.map((players, index) => (
              <div key={index} className={order[index]}>
                <h3 className='categorie'>{order[index]}</h3>
                {players.length > 0 ? (
                  <ul>
                    {players.map((player, index) => (
                      <li className='lista-jucatori' key={index}>{player.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p className='lista-jucatori'>Niciun jucător</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EchipaJuniori;


/*   MAP -- API*/
/*

import React, { useState, useEffect } from 'react';
import './EchipaJuniori.scss';
import arrow from '../../assets/juniori/arrow.png';

const EchipaJuniori = ({ numeEchipa }) => {
  const [hideDiv, setHideDiv] = useState(false);
  const [jucatori, setJucatori] = useState([]);

  useEffect(() => {
    const fetchJucatori = async () => {
      try {
        const response = await fetch(`URL_API_JUCATORI ?echipa=${numeEchipa}`);
        if (response.ok) {
          const data = await response.json();
          setJucatori(data);
        } else {
          throw new Error('Eroare la preluarea datelor jucatorilor');
        }
      } catch (error) {
        console.error('Eroare:', error);
      }
    };

    fetchJucatori();
  }, [numeEchipa]);

  const showHide = () => {
    setHideDiv(!hideDiv);
  };

  const order = ['Portar', 'Interi', 'Extreme', 'Centrali', 'Pivoti'];

  const groupedPlayers = jucatori.reduce((acc, player) => {
    const positionIndex = order.indexOf(player.position);
    if (positionIndex !== -1) {
      if (!acc[positionIndex]) {
        acc[positionIndex] = [];
      }
      acc[positionIndex].push(player);
    }
    return acc;
  }, []);

  order.forEach((category, index) => {
    if (!groupedPlayers[index]) {
      groupedPlayers[index] = [];
    }
  });

  return (
    <div>
      <div className="juniori1" onClick={showHide}>
        <div className="drop-section">
          <div className="title">Echipa {numeEchipa}</div>
          <div className="drop-arrow">
            <img
              src={arrow}
              alt=""
              style={{ transform: hideDiv ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </div>
        </div>
        {hideDiv && (
          <div className="info-jucatori">
            {groupedPlayers.map((players, index) => (
              <div key={index} className={order[index]}>
                <h3>{order[index]}</h3>
                {players.length > 0 ? (
                  <ul>
                    {players.map((player, index) => (
                      <li key={index}>{player.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p>Niciun jucător</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EchipaJuniori;
*/

