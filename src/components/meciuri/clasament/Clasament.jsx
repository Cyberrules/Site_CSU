import React, { useState, useEffect } from 'react';
import "./Clasament.scss"
import "./script"


import ligaLogo from "../../assets/logoLiga.png"
const TabelClasament = ({ data }) => {
  return (
    <div className='container-clasament'>
      <div>
    <table className='tableTeam'>
      <thead>
        <tr className='trTeam'>
          <th className='thTeam'>Pozitia</th>
          <th className='thTeam'>Echipa</th>
          <th className='thTeam'>Juc</th>
          <th className='thTeam'>V</th>
          <th className='thTeam'>E</th>
          <th className='thTeam'>P</th>
          <th className='thTeam'>GM</th>
          <th className='thTeam'>GP</th>
          <th className='thTeam'>GDif</th>
          <th className='thTeam'>VA</th>
          <th className='thTeam'>EA</th>
          <th className='thTeam'>VD</th>
          <th className='thTeam'>ED</th>
          <th className='thTeam'>PtsA</th>
          <th className='thTeam'>PtsD</th>
          <th className='thTeam'>Puncte</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}  className='trTeam'>
            <td className='tdTeam'>{item.Pos}</td>
            <td className='tdTeam'>{item.NumeEchipa}</td>
            <td className='tdTeam'>{item.Meciuri}</td>
            <td className='tdTeam'>{item.Victorii}</td>
            <td className='tdTeam'>{item.Egaluri}</td>
            <td className='tdTeam'>{item.Infrangeri}</td>
            <td className='tdTeam'>{item.GoluriMarcate}</td>
            <td className='tdTeam'>{item.GoluriPrimite}</td>
            <td className='tdTeam'>{item.DiferentaGoluri}</td>
            <td className='tdTeam'>{item.VictoriiAcasa}</td>
            <td className='tdTeam'>{item.EgaluriAcasa}</td>
            <td className='tdTeam'>{item.VictoriiDeplasare}</td>
            <td className='tdTeam'>{item.EgaluriDeplasare}</td>
            <td className='tdTeam'>{item.PuncteAcasa}</td>
            <td className='tdTeam'>{item.PuncteDeplasare}</td>
            <td className='tdTeam'>{item.Puncte}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
};

/*
const dateExemplu = [
  {
    Pos: 1,
    Echipa: 'Echipa 1',
    Juc: 10,
    V: 7,
    E: 2,
    P: 1,
    GM: 20,
    GP: 10,
    GDif: 10,
    VA: 15,
    EA: 5,
    VD: 5,
    ED: 2,
    PtsA: 22,
    PtsD: 12,
    Pts: 34,
  },
  {
    Pos: 2,
    Echipa: 'Echipa 2',
    Juc: 10,
    V: 7,
    E: 2,
    P: 1,
    GM: 20,
    GP: 10,
    GDif: 10,
    VA: 15,
    EA: 5,
    VD: 5,
    ED: 2,
    PtsA: 22,
    PtsD: 12,
    Pts: 34,
  },
  {
    Pos: 3,
    Echipa: 'Echipa 3',
    Juc: 10,
    V: 7,
    E: 2,
    P: 1,
    GM: 20,
    GP: 10,
    GDif: 10,
    VA: 15,
    EA: 5,
    VD: 5,
    ED: 2,
    PtsA: 22,
    PtsD: 12,
    Pts: 34,
  },
  {
    Pos: 4,
    Echipa: 'Echipa 4',
    Juc: 10,
    V: 7,
    E: 2,
    P: 1,
    GM: 20,
    GP: 10,
    GDif: 10,
    VA: 15,
    EA: 5,
    VD: 5,
    ED: 2,
    PtsA: 22,
    PtsD: 12,
    Pts: 34,
  },
];

*/
const Clasament = ({ data }) => {

  const [dateExemplu, setPlayersData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5050/api/clasament')
      .then(response => response.json())
      .then(data => {
        setPlayersData(data);
      })
      .catch(error => {
        console.error('A apărut o eroare:', error);
      });
  }, []);


  return (
    <div className='meciuri'>
      <div className='textClasament'>
          <h1 className='textHClasament'>Clasament</h1>
          <h5  className='textPClasament'>Handbal masculin</h5>
          <h6  className='textPClasament'>2023/2024</h6>
      </div>

      <div className='containerClasament'>



      <div className='containerLiga'>
        <div className='columnLiga'>
            <div className='ligaMasculin'>
              <img src={ligaLogo} alt="Logo Liga Masculin"  className='imgLiga'/>
            </div>
        </div>
        <div className='columnLiga2'>
            <h5>Liga națională de handbal masculin</h5>
            <h6>Sezonul 2023 - 2024</h6>
        </div>
      </div>

            <TabelClasament data={dateExemplu} />
      </div>
    </div>
  );
};

export default Clasament;
