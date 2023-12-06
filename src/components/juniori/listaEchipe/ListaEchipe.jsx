/*    MAP - JSON  */
import React from 'react';
import EchipaJuniori from '../echipaJuniori/EchipaJuniori';

const ListaEchipe = () => {
  const numeEchipe = ['U16', 'U18', 'U20']; 

  return (
    <div>
      {numeEchipe.map((numeEchipa, index) => (
        <EchipaJuniori key={index} numeEchipa={numeEchipa} />
      ))}
    </div>
  );
};

export default ListaEchipe;



/*MAP --- API*/
/*
import React, { useState, useEffect } from 'react';
import EchipaJuniori from '../echipaJuniori/EchipaJuniori';

const ListaEchipe = () => {
  const [echipe, setEchipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://............');
        if (response.ok) {
          const data = await response.json();
          setEchipe(data);
        } else {
          throw new Error('Eroare la preluarea datelor');
        }
      } catch (error) {
        console.error('Eroare:', error);
      }
    };
    fetchData();
  }, []); 

  return (
    <div>
      {echipe.map((numeEchipa, index) => (
        <EchipaJuniori key={index} numeEchipa={numeEchipa} />
      ))}
    </div>
  );
};

export default ListaEchipe;
*/
