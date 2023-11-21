import React from 'react';
import ImagineEchipa from '../assets/imgEchipa.png';
import './Home.scss';
import CardNoutati from '../cardNoutati/CardNoutati';
import SliderEchipa from '../echipaSlider/SliderEchipa';
import Clasament from '../clasament/Clasament';




const Home = () => {



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

  return (
    <div>
        <div className="centered-image">
            <img className='imagineHome' src={ImagineEchipa} alt="imgEchipa" />
        </div>


        <div className="despre_noi">
            <div className="despre_text">
                <h1>Despre Noi</h1>
                <h2>Clubul Sportiv Universitatea Suceava</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar, libero nec condimentum mollis, augue ipsum tempus nunc, eget pellentesque felis elit at urna. Phasellus at dictum tortor, at lacinia sem. Sed imperdiet in orci non tempus. Fusce sapien dui, scelerisque a sagittis id, elementum quis mi.</p>
                <a className= "link" href='despre'>Afla mai multe →</a>
            </div>
        </div>


        <div className="noutati-container">
            <div className="noutati">
                <h1>Noutati</h1> 
            </div>
            <div className='carduri'>
              <CardNoutati />
              <CardNoutati />
              <CardNoutati />
            </div>
        </div>

        <Clasament/>

     
    <div className="jucatori">
      <h4 >JUCATORI</h4>
    </div>

    <div className='sliderEchipa'>
      <SliderEchipa slides={slides}/>
    </div>


    <div className="sponsori">
      <h3 >SPONSORI</h3>
    </div>



    </div>
  );
};

export default Home;
