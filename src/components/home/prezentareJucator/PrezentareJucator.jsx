import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './PrezentareJucator.scss';
import Intro from './intro/Intro';
import Pozitie from './pozitie/Pozitie';
import InformatiiJucator from './informatiiJucator/InformatiiJucator';

const PrezentareJucator = () => {
  const { playerId } = useParams();
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



  const tabs = [
    {
      label: 'Intro',
      content: playerDetails && <Intro playerDetails={playerDetails} />,
      closable: true
    },
    {
      label: 'Informatii',
      content: playerDetails && <InformatiiJucator playerDetails={playerDetails} />,
      closable: false
    },
    {
      label: 'Poziție',
      content: playerDetails && <Pozitie playerDetails={playerDetails} />,
      closable: false
    },
    
  ];

  const [activeTab, setActiveTab] = useState(0);

  const closeAllTabs = () => {
    setPlayerDetails(null);
  };

  return (
    <div>
      {playerDetails && (
        <div className='container-prezentare'>
          <div className="tabs">
            <div className="tab-buttons">
              {tabs.map((tab, index) => (
                <div key={index} className="tab">
                  <button
                    className={index === activeTab ? 'active' : ''}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.label}
                  </button>
                </div>
              ))}
            </div>
            <div className="tab-content">
              <div className="close-button">
                <button onClick={closeAllTabs}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              {tabs[activeTab]?.content || null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrezentareJucator;
