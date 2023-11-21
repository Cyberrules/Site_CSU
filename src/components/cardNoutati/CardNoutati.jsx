import React from 'react';
import imagine from "../assets/imgEchipa.png"
import "./CardNoutati.scss"
const CardNoutati = () => {
  return (
    <div className="m-4">
    <div className="card" >
      <div className='imagineCard'>
        <img src={imagine} className="card-img-top" alt="Sample Image" />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">Alice Liddel</h5>
        <p className="card-text">
          Alice is a freelance web designer and developer based in London.
          Alice is a freelance web designer and developer based in London.
          Alice is a freelance web designer and developer based in London. 
         
        </p>
        <a href="#" className="btn button_news">
               Afla mai multe →</a>
      </div>
    </div>

    
  </div>
  );
};

export default CardNoutati;
