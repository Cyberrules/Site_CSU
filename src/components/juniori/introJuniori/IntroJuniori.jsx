import React from "react";
import "./IntroJuniori.scss";

import intro3 from "../../assets/juniori/intro/antrenor.jpg";

const IntroJuniori = () => {
  const textIntroJuniori = {
    titlu: "Handbal juvenil",
    continut:
      "Juniorii de la CSU Suceava au avut un an remarcabil în 2023, în special echipele de handbal la categoriile J1, J2 și J3. Echipa J1 a obținut locul al doilea la Campionatul Național din Bacău, iar Daniel Stanciuc a fost desemnat cel mai valoros jucător al turneului. În timp ce echipa J2 a devenit campioană națională la Moreni, cu mai mulți jucători evidențiați pentru performanțele lor. Patru jucători au fost convocați la naționala de juniori a României și au jucat împotriva echipelor din Spania, Franța și Portugalia în decembrie 2022.",
  };

  return (
    <div>
      <div className="image-container-juniori">
        <div className="imageIntro1-juniori"></div>
      </div>

      <div className="details-container-juniori">
        <div>
          <div className="titleIntro-juniori">
            <h2>{textIntroJuniori.titlu}</h2>
          </div>
          <div className="infoIntro-juniori">
            <p>{textIntroJuniori.continut}</p>
          </div>
        </div>

        <div className="imageIntro-juniori">
          <img src={intro3} alt="" className="imagineIntro-juniori" />
        </div>
      </div>
    </div>
  );
};

export default IntroJuniori;
