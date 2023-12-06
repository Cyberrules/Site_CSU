import React/*, { useState, useEffect } */from 'react';
import ImagineEchipa from '../assets/imgEchipa.png';
import './Home.scss';
import CardNoutati from '../cardNoutati/CardNoutati';
import SliderEchipa from '../echipaSlider/SliderEchipa';

import Clasament from '../clasament/Clasament';
import Sponsori from './sponsori/Sponsori';





const Home = () => {

/*
  const [stiri, setStiri] = useState([]);
  useEffect(() => {
    fetch('https://........./stiri')
      .then(response => response.json())
      .then(data => {
        setStiri(data);
      })
      .catch(error => {
        console.error('A apărut o eroare:', error);
      });
  }, []);
  */


  const stiri = [
    {
      id: 1,
      imagine: ImagineEchipa,
      titlu: 'Titlu știre 1',
      continut: 'Conținutul știrii 1...'
    },
    {
      id: 2,
      imagine: ImagineEchipa,
      titlu: 'Titlu știre 2',
      continut: 'Conținutul știrii 2..hafbhjadfbasbfhasfhasvfhjasvfhsvfashjfvashjfvasljhfvsaj.'
    },
    {
      id: 3,
      imagine: ImagineEchipa,
      titlu: 'Titlu știre 3',
      continut: 'Conținutul știrii 2..hafbhjadfbasbfhasfhasvfhjasvfhsvfashjfvashjfvasljhfvsaj.'
    },
  ];


  const sliderClick = (slider)=>{

  }

  const slides = [
    {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
  ]
  

/*
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('https://....../slides')
      .then(response => response.json())
      .then(data => {
        setSlides(data);
      })
      .catch(error => {
        console.error('A apărut o eroare:', error);
      });
  }, []);
*/


  return (
    <div>
        <div className="centered-image" imagineHome>
        <img className='imagineHome' src={ImagineEchipa} alt="imgEchipa" />
        </div>


        <div className="despre_noi">
            <div className="despre_text">
                <h1>Despre Noi</h1>
                <h2>Clubul Sportiv Universitatea Suceava</h2>
                <p>Suntem o echipă de handbal din municipiul Suceava, România. Cea mai mare performanță a echipei este accederea în finala Cupei Challenge, pierdută în fața echipei CS UCM Reșița. În competițiile interne, CSU Suceava a câștigat medalia de bronz în Liga Națională, în sezonul 2010-2011, s-a clasat pe locul III în Cupa României, în sezonul 2022-2023.</p>
                <a className= "link" href='despre'>Afla mai multe →</a>
            </div>
        </div>


        <div className="noutati-container">
            <div className="noutati">
                <h1>Noutati</h1> 
            </div>
            <div className='carduri'>
              {stiri.map((stire) => (
                <CardNoutati key={stire.id} stire={stire} />
                ))} 
            </div>
        </div>

        <Clasament/>

     
    <div className="jucatori">
      <h4 >JUCATORI</h4>
    </div>

    <div className='sliderEchipa'>
      <SliderEchipa slides={slides} />
    </div>


    <div className="containerSponsori">
      <div className='titluSponsori'><h3 >SPONSORI</h3></div>
      <Sponsori />
    </div>



    </div>
  );
};

export default Home;
