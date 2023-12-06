import React, { useState, useEffect } from 'react'
import "./Clasament.scss";




import "../meciuri/script"

const TabelClasament = ({ data }) => {
  return (
    <div className='container-clasament'>
      <div>
    <table className='tableClasament'>
      <thead>
        <tr className='trClasament'>
          <th className='thClasament'>Pozitie</th>
          <th className='thClasament'>Echipa</th>
          <th className='thClasament'>Juc</th>
          <th className='thClasament'>V</th>
          <th className='thClasament'>E</th>
          <th className='thClasament'>I</th>
          <th className='thClasament'>GM</th>
          <th className='thClasament'>GP</th>
          <th className='thClasament'>Puncte</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={`trClasament ${item.NumeEchipa === 'CSU din Suceava' ? 'csu-suceava-row' : ''}`}>
            <td className='tdClasament'>{item.Pos}</td>
            <td className='tdClasament'>{item.NumeEchipa}</td>
            <td className='tdClasament'>{item.Meciuri}</td>
            <td className='tdClasament'>{item.Victorii}</td>
            <td className='tdClasament'>{item.Egaluri}</td>
            <td className='tdClasament'>{item.Infrangeri}</td>
            <td className='tdClasament'>{item.GoluriMarcate}</td>
            <td className='tdClasament'>{item.GoluriPrimite}</td>
            <td className='tdClasament'>{item.Puncte}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
};




const Clasament = ({data}) => {
    var logo = require("../assets/img1.png");



    const [dateExemplu, setPlayersData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5050/api/clasament')
        .then(response => response.json())
        .then(data => {
          const csuSuceavaIndex = data.findIndex(team => team.NumeEchipa === 'CSU din Suceava');
    
          if (csuSuceavaIndex !== -1) {
            const startSliceIndex = Math.max(0, csuSuceavaIndex - 2);
            const endSliceIndex = Math.min(data.length, csuSuceavaIndex + 3);
            const slicedTeams = data.slice(startSliceIndex, endSliceIndex);
            setPlayersData(slicedTeams);
          }
        })
        .catch(error => {
          console.error('A apărut o eroare:', error);
        });
    }, []);

  return (
    <div className="meciuri-container">
    <div className="meci-trecut">
      <div className="title-container">
        <p className="ultimul-meci">Ultimul meci</p>
        <p className="liga-text">Handbal masculin</p>
      </div>
      <div className="data-container">
        <div className="header-data">
          <img className="logo-liga" src={logo} alt=""></img>
          <p className="data-meci">17.09.2023 07:30</p>
        </div>
        <div className="middle-data">
          <div className="echipaAcasa">
            <p className="nume-echipa">SUCEAVA</p>
            <p className="scor-echipa">45</p>
          </div>
          <div className="echipaDeplasare">
            <p className="nume-echipa">CSM POLITEHNICA</p>
            <p className="scor-echipa">35</p>
          </div>
        </div>
        <div className="bottom-data">
          <p className="galerie-meci">
            Galerie meci <span className="arrow">&#x2192;</span>
          </p>
        </div>
      </div>
    </div>
    <div className="meci-urmator">
      <div className="title-container">
        <p className="ultimul-meci">Următorul meci</p>
        <p className="liga-text">Handbal masculin</p>
      </div>
      <div className="data-container">
        <div className="header-data">
          <img className="logo-liga" src={logo} alt=""></img>
          <p className="data-meci">17.09.2023 </p>
        </div>
        <div className="middle-data">
          <div className="echipe">
            <div className="echipaAcasa">
              <p className="nume-echipa">VASLUI</p>
            </div>
            <div className="echipaDeplasare">
              <p className="nume-echipa">SUCEAVA</p>
            </div>
          </div>

          <p className="ora-meci">08:00</p>
        </div>
        <div className="bottom-data">
          <p className="meci-live">
            Vezi LIVE <span className="arrow">&#x2192;</span>
          </p>
        </div>
      </div>
    </div>
    <div className="clasament">
      <div className="title-container">
        <p className="ultimul-meci">Clasament</p>
        <p className="liga-text">Handbal masculin</p>
      </div>
      <div className="clasament-echipe">
          <TabelClasament data={dateExemplu} />

      </div>
    </div>
  </div>
  )
}

export default Clasament
