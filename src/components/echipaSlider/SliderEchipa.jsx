import React from 'react';
import './SliderEchipa.scss';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SliderEchipa = ({ slides, onPlayerSelect }) => {
  const textSlider = {
    nationalitate: 'Naţionalitate:',
    pozitie: 'Poziţie:'
  };

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 325;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 325;
  };

  const handlePlayerClick = (player) => {
    if (player) {
      console.log('Player Data:', player.jucatorID);
      onPlayerSelect(player.jucatorID);
    }
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft size={35} className="slider-icon left" onClick={slideLeft} />
      <div id="slider">
        {slides.map((player, index) => (
          <Link to={`/prezentareJucator/${player.jucatorID}`} key={index} className="slider-card-link">
          <div className="slider-card" key={index} onClick={() => handlePlayerClick(player)}>
            <div
              className="slider-card-image"
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
          </Link>
        ))}
      </div>
      <MdChevronRight size={35} className="slider-icon right" onClick={slideRight} />
    </div>
  );
};

export default SliderEchipa;
