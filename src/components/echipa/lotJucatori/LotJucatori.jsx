import React, { useState/*, useEffect */} from 'react';
import "./LotJucatori.scss";
import CardJucatori from "../cardJcatori/CardJucatori";



import juc1 from "../../assets/membriEchipa/AdiTîrzioru.png"
import juc2 from "../../assets/membriEchipa/AlbertVizitiu.png"
import juc3 from "../../assets/membriEchipa/AlexandruBologa.png"
import juc4 from "../../assets/membriEchipa/AndreiBruj.png"
import juc5 from "../../assets/membriEchipa/AronDedu.png"
import juc6 from "../../assets/membriEchipa/BogdanNiculaie.png"
import juc7 from "../../assets/membriEchipa/BotondBalasz.png"
import juc8 from "../../assets/membriEchipa/CodrinRadu.png"
import juc9 from "../../assets/membriEchipa/CosminLupu.png"
import juc10 from "../../assets/membriEchipa/EduardIordachi.png"
import juc11 from "../../assets/membriEchipa/PavelLoic.png"
import juc12 from "../../assets/membriEchipa/SorinGrigore.png"
import juc13 from "../../assets/membriEchipa/VencelCsog.png"

const LotJucatori = () => {

    const playersData = [
        {
          nume: "Adi Tîrzioru",
          pozitie: "portar",
          nationalitate: "Romania",
          dataNastere: "12.10.1990",
          inaltime: "198",
          imagine: juc1
        },
        {
          nume: "Albert Vizitiu",
          pozitie: "extrem",
          nationalitate: "Romania",
          dataNastere: "01.01.1995",
          inaltime: "165",
          imagine: juc2 
        },
        {
          nume: "Alexandru Bologa",
          pozitie: "portar",
          nationalitate: "Romania",
          dataNastere: "01.01.1995",
          inaltime: "165",
          imagine: juc3
        },
        {
          nume: "Andrei Bruj",
          pozitie: "portar",
          nationalitate: "Romania",
          dataNastere: "01.01.1995",
          inaltime: "165",
          imagine: juc4 
        },
        {
          nume: "Aron Dedu",
          pozitie: "pivot",
          nationalitate: "Romania",
          dataNastere: "01.01.1995",
          inaltime: "165",
          imagine: juc5 
        },
        {
          nume: "Bogdan Niculaie",
          pozitie: "pivot",
          nationalitate: "Romania",
          dataNastere: "01.01.1995",
          inaltime: "165",
          imagine: juc6 
        },
        {
          nume: "Botond Balasz",
          pozitie: "central",
          nationalitate: "Romania",
          dataNastere: "01.01.1995",
          inaltime: "165",
          imagine: juc7 
        },{
          nume: "Codrin Radu",
          pozitie: "inter",
          nationalitate: "Romania",
          dataNastere: "01.01.1995",
          inaltime: "165",
          imagine: juc8 
        },
        {
          nume: "Cosmin Lupu",
          pozitie: "Atacant",
          nationalitate: "Romania",
          dataNastere: "01.01.1995",
          inaltime: "165",
          imagine: juc9 
        },
        {
          nume: "Eduard Iordachi",
          pozitie: "inter",
          nationalitate: "Romania",
          dataNastere: "01.01.1995",
          inaltime: "165",
          imagine: juc10 
        },
        {
          nume: "Pavel Loic",
          pozitie: "extrem",
          nationalitate: "Romania",
          dataNastere: "01.01.1995",
          inaltime: "165",
          imagine: juc11 
        },
        {
          nume: "Sorin Grigore",
          pozitie: "portar",
          nationalitate: "Romania",
          dataNastere: "01.01.1995",
          inaltime: "165",
          imagine: juc12 
        },
        {
          nume: "Vencel Csog",
          pozitie: "portar",
          nationalitate: "Romania",
          dataNastere: "01.01.1995",
          inaltime: "165",
          imagine: juc13 
        },
    
      ];
    
    /*
      const [playersData, setPlayersData] = useState([]);
      useEffect(() => {
        fetch('https://...../playersData')
          .then(response => response.json())
          .then(data => {
            setPlayersData(data);
          })
          .catch(error => {
            console.error('A apărut o eroare:', error);
          });
      }, []);
      */





      const [filteredPlayers, setFilteredPlayers] = useState([]);
      const filterPlayersByPosition = (position) => {
        const filtered = playersData.filter(player => player.pozitie.toLowerCase() === position.toLowerCase());
        setFilteredPlayers(filtered);
      };
    
      const [selectedPosition, setSelectedPosition] = useState('');
      const togglePlayersVisibility = (position) => {
        if (selectedPosition === position) {
          setSelectedPosition('');
          setFilteredPlayers([]);
        } else {
          const filtered = playersData.filter(player => player.pozitie.toLowerCase() === position.toLowerCase());
          setFilteredPlayers(filtered);
          setSelectedPosition(position);
        }
      };

  return (
    <div>
        <div className="jucatoriContainer">
            <div className="titluJucatori">LOT JUCATORI</div>
            <div className="containerButton">
                <button className={`butonEchipa ${selectedPosition === 'portar' ? 'selected' : ''}`} onClick={() => togglePlayersVisibility('portar')}>PORTARI</button>
                <button className={`butonEchipa ${selectedPosition === 'inter' ? 'selected' : ''}`} onClick={() => togglePlayersVisibility('inter')}>INTERI</button>
                <button className={`butonEchipa ${selectedPosition === 'pivot' ? 'selected' : ''}`} onClick={() => togglePlayersVisibility('pivot')}>PIVOTI</button>
                <button className={`butonEchipa ${selectedPosition === 'central' ? 'selected' : ''}`} onClick={() => togglePlayersVisibility('central')}>CENTRALI</button>
                <button className={`butonEchipa ${selectedPosition === 'extrem' ? 'selected' : ''}`} onClick={() => togglePlayersVisibility('extrem')}>EXTREME</button>
            </div>
            {filteredPlayers.length > 0 && (
                <div className="playercontainer">
                        <div className="playercards">
                            {filteredPlayers.map((player, index) => (
                                <div className="playercard" key={index}>
                                    <CardJucatori player={player} />
                                </div>
                            ))}
                        </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default LotJucatori
