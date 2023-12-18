import React from "react";
import './Juniori.scss';

import IntroJuniori from "./introJuniori/IntroJuniori";
import  ListaTrofee from "../juniori/listaTrofee/ListaTrofee";
import  ListaEchipe from "../juniori/listaEchipe/ListaEchipe";


/*

<div className="juniori">
        <div className="header">JUNIORI</div>
        {teamsWithPlayers?.map((team, index) => (
          <EchipaJuniori
            key={index}
            teamName={team.categorie}
            players={team.players}
          />
        ))}
      </div>

*/


const Juniori = () => {
  return (
    <div className="container-juniori">
     
      <IntroJuniori/>
      
      <div className="cadeti">
        <div className="headerCadeti">CADEȚI</div>
      </div>

      <ListaEchipe />
      <ListaTrofee/>
 
    </div>
  );
};

export default Juniori;
