import React from 'react';
import './SliderEchipa.scss';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
const SliderEchipa =(props)=>{
    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 325;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 325;
    }

    return(
        <div id="main-slider-container">
            <MdChevronLeft size={35} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
               { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>
                                <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={35} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}
export default SliderEchipa;