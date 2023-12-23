import React from 'react';
import './SliderEchipa.scss';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const SliderEchipa = (props) => {

  const textSlider ={
    nationalitate: 'Naţionalitate:',
    pozitie: 'Poziţie:'
  }

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 325;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 325;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft size={35} className="slider-icon left" onClick={slideLeft} />
      <div id="slider">
        {props.slides.map((player, index) => (
          <div className="slider-card" key={index} onClick={() => player.clickEvent()}>
            <div className="slider-card-image"
                style={{
                        backgroundImage: `url(data:image/png;base64,${player.imagine})`,
                        backgroundSize: 'cover'
                }}
            ></div>
            <p className="slider-card-title">{`${player.nume} ${player.prenume}`}</p>
            <p className="slider-card-nationality">{textSlider.nationalitate} {player.nationalitate}</p>
            <p className="slider-card-position">{textSlider.pozitie} {player.pozitie}</p>
            <p className="slider-card-description">{player.descriere}</p>
          </div>
        ))}
      </div>
      <MdChevronRight size={35} className="slider-icon right" onClick={slideRight} />
    </div>
  );
};

export default SliderEchipa;
