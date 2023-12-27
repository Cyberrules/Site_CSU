import React from "react";
import "./SliderEchipa.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const SliderEchipa = ({ slides, onPlayerSelect }) => {
  const pozitii = {
    portar: "P",
    pivot: "Pi",
    centru: "C",
    "inter-stanga": "IS",
    "inter-dreapta": "ID",
    "extrema-stanga": "ES",
    "extrema-dreapta": "ED",
  };

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 325;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 325;
  };

  const handlePlayerClick = (player) => {
    if (player) {
      console.log("ID jucator:", player.jucatorID);
      onPlayerSelect(player.jucatorID);
    }
  };

  const getTextPozitie = (pozitie) => {
    const pozitieNoua = pozitie
      .toLowerCase()
      .replace(/ă/g, "a")
      .replace(/â/g, "a")
      .replace(/ /g, "-");
    return pozitii[pozitieNoua];
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={35}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider">
        {slides.map((player, index) => (
          <Link
            to={`/prezentareJucator/${player.jucatorID}`}
            key={index}
            className="slider-card-link"
          >
            <div
              className="slider-card"
              key={index}
              onClick={() => handlePlayerClick(player)}
            >
              <div
                className="imagineJucator"
                style={{
                  backgroundImage: `url(${
                    player.imagine
                      ? `data:image/png;base64,${player.imagine}`
                      : require("../../assets/jucatorImagine.jpg")
                  })`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="numeJucator">
                <p className="nume">{player.nume}</p>
                <p className="prenume">{player.prenume}</p>
              </div>

              <p className="pozitie">{getTextPozitie(player.pozitie)}</p>
            </div>
          </Link>
        ))}
      </div>
      <MdChevronRight
        size={35}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};

export default SliderEchipa;
