import React, { Component } from 'react';
import './Despre.scss'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import TimeLine from '../despre/timeline/TimeLine'

const Despre = () => {
  return (
    <div className="despre">
      <div className="titlu">
        <h3>Despre CSU Suceava</h3>
        <div className='image-container'>
          <img src={img1} alt='Image 1' className='image' />
          <img src={img2} alt='Image 2' className='image' />
          <img src={img3} alt='Image 3' className='image' />
        </div>
      </div>

      <div className="viziune">
        <h5>Viziune</h5>
        <p>
          Una dintre prioritățile clubului nostru rămâne depistarea și formarea copiilor cu cele mai bune calități pentru practicarea handbalului de mare performanță.
          Scopul principal al CLUBULUI SPORTIV UNIVERSITATEA SUCEAVA este de a organiza şi desfăşura activităţi sportive de performanţă
          şi de masă cu studenţii, cadrele didactice şi alte categorii de personal din Universitatea
          “Ştefan cel Mare” Suceava, precum şi cu alte categorii de cetăţeni care respectă statutul clubului.</p>
      </div>
      <div className="istoric">
        <h5>Istoric</h5>
      </div>
      <TimeLine />
      <div className="trofee">
        <h3>Trofee</h3>
      </div>
      <div className="palmares">
        <div className="coluna">
        <div class='card'>
    <div class='year'>2023 | Numele Trofeului</div>
</div>
        </div>
        <div className="coluna">
        </div>
      </div>
    </div>
  )
}

export default Despre
