import React from "react";
import "./MeciuriViitoare.scss";
import logoLiga from "../../assets/logoLiga.png";

const MeciuriViitoare = ({
  etapa,
  locatia,
  data,
  numeEchipa1,
  logoEchipa1,
  logoEchipa2,
  numeEchipa2,
  ora,
}) => {
  const textVS = "VS";
  return (
    <div className="containerMeciuriViitoare">
      <div className="cardMeciuriViitoare">



        <div className="wrapperContainerViitoare">
          <div className="logoContainerViitoare">
            <img src={logoLiga} alt="Logo" className="logoLigaViitorare" />
          </div>

          <div className="infoContainer">
            <p>{etapa}</p>
            <p>{locatia}</p>
          </div>

          <div className="bara-verticala-viitoare"></div>

          <div className="infoData">
            <p>{data}</p>
          </div>
        </div>

        <div class="elementeMeciuri">
          <div class="logoEchipaGazda">
            <p class="numeEchipaGazda">{numeEchipa1}</p>
            <img src={logoEchipa1} alt="Logo" class="logoLigaMeciViitor" />
          </div>
          <div class="separator">{textVS}</div>
          <div class="logoEchipaOaspete">
            <img src={logoEchipa2} alt="Logo" class="logoLigaMeciViitor" />
            <p class="numeEchipaOaspete">{numeEchipa2}</p>
          </div>
        </div>

        <div className="containerOraMeci">
          <div className="ora">{ora}</div>
        </div>
      
      </div>
    </div>
  );
};

export default MeciuriViitoare;
