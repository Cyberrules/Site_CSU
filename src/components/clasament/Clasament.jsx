import React from 'react'
import "./Clasament.scss";

const Clasament = () => {
    var logo = require("../assets/img1.png");
 
  return (
    <div className="meciuri-container">
    <div className="meci-trecut">
      <div className="title-container">
        <p className="ultimul-meci">Ultimul meci</p>
        <p className="liga-text">Handbal masculin</p>
      </div>
      <div className="data-container">
        <div className="header-data">
          <img className="logo-liga" src={logo}></img>
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
          <img className="logo-liga" src={logo}></img>
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
      <div className="clasament-echipe"></div>
    </div>
  </div>
  )
}

export default Clasament
