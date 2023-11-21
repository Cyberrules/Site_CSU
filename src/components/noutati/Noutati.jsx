import React, { useState } from 'react';
import CardNoutati from '../cardNoutati/CardNoutati';
import './Noutati.scss';
import ImagineEchipa from '../assets/imgEchipa.png';






const SimpleSlider = ({ cardData, currentIndex, totalCards, cardsPerPage, goToNextSlide, goToPrevSlide, visibleCards }) => {
  return (
    <div className="simple-slider">
      <button className={`control-button prev ${currentIndex === 0 ? 'hidden' : ''}`} onClick={goToPrevSlide}>
        Inapoi
      </button>
      <div className="slider-wrapper">
        <div className="slider-container" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
          {visibleCards.map((card, index) => (
            <div key={index} className="slide">
              <CardNoutati
                key={index}
                title={card.title}
                image={card.image}
                desc={card.desc}
              />
            </div>
          ))}
        </div>
      </div>
      <button className={`control-button next ${currentIndex >= totalCards - cardsPerPage ? 'hidden' : ''}`} onClick={goToNextSlide}>
        Inainte
      </button>
    </div>
  );
};

const Noutati = () => {

  const cardData = [
    {
      title: 'Card 1',
      image: 'URL_imaginii_1',
      desc: 'Descriere imaginii 1',
    },
    {
      title: 'Card 2',
      image: 'URL_imaginii_2',
      desc: 'Descriere imaginii 2',
    },
    {
      title: 'Card 3',
      image: 'URL_imaginii_3',
      desc: 'Descriere imaginii 3',
    },
    {
      title: 'Card 4',
      image: 'URL_imaginii_4',
      desc: 'Descriere imaginii 4',
    },
    {
      title: 'Card 5',
      image: 'URL_imaginii_5',
      desc: 'Descriere imaginii 5',
    },
    {
      title: 'Card 6',
      image: 'URL_imaginii_6',
      desc: 'Descriere imaginii 6',
    },
    {
      title: 'Card 4',
      image: 'URL_imaginii_4',
      desc: 'Descriere imaginii 4',
    },
    {
      title: 'Card 5',
      image: 'URL_imaginii_5',
      desc: 'Descriere imaginii 5',
    },
    {
      title: 'Card 6',
      image: 'URL_imaginii_6',
      desc: 'Descriere imaginii 6',
    },
  
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cardData.length;
  const cardsPerPage = 3;

  const goToNextSlide = () => {
    const nextIndex = currentIndex + cardsPerPage;
    if (nextIndex < totalCards) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0);
    }
  };

  const goToPrevSlide = () => {
    const prevIndex = currentIndex - cardsPerPage;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    } else {
      setCurrentIndex(totalCards - cardsPerPage);
    }
  };

 

  const visibleCards = cardData.slice(currentIndex, currentIndex + cardsPerPage);
 
  return (

    <div>
    

    <div>
      <div className="container-stiri">
        <SimpleSlider
          cardData={cardData}
          currentIndex={currentIndex}
          totalCards={totalCards}
          cardsPerPage={cardsPerPage}
          goToNextSlide={goToNextSlide}
          goToPrevSlide={goToPrevSlide}
          visibleCards={visibleCards}
        />
      </div>
    </div>
    

   
    <div class="container-stiri">

<div class="div1">
<div className='stire'>
        <button className='buton-dreapta'>Share</button>
        <h4>
          Titlu Stire
        </h4>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during the Renaissance.
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        <div className="centered-image">
          <img className='imagineHome' src={ImagineEchipa} alt="imgEchipa" />
        </div>
      </div>
</div>

<div class="div2">
  <button class="button1">Tip Stire</button>
  <button class="button2">Calendar Stire</button>
</div>
</div>
  </div>
   




  );
};


export default Noutati;