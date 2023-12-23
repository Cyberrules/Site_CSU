import React from "react";
import './Juniori.scss';

import IntroJuniori from "./introJuniori/IntroJuniori";
import  ListaTrofee from "../juniori/listaTrofee/ListaTrofee";
import  ListaEchipe from "../juniori/listaEchipe/ListaEchipe";

const Juniori = () => {

  const titluCadeti= 'CADEȚI';

  return (
    <div className="container-juniori">
     
      <IntroJuniori/>
      
      <div className="cadeti">
        <div className="headerCadeti">{titluCadeti}</div>
      </div>
      <ListaEchipe />
      <ListaTrofee/>
 
    </div>
  );
};

export default Juniori;
