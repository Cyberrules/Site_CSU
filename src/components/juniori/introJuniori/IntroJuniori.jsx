import React from 'react'
import './IntroJuniori.scss';


import intro1 from "../../assets/juniori/intro/Image1.jpg";
import intro2 from "../../assets/juniori/intro/Image2.jpg";
import intro3 from "../../assets/juniori/intro/antrenor.jpg";




const IntroJuniori = () => {
  return (
    <div>

      <div className="image-container">
        <div className="imageIntro1">
          <img src={intro1} alt="intro1" />
        </div>
        <div className="imageIntro2">
          <img src={intro2} alt="intro2" />
        </div>
      </div>


        <div className="details-container">
        <div >
          <div className="titleIntro">
            <h2>Handbal juvenil</h2>
          </div>
          <div className="infoIntro">
            <p>
                Mauris sollicitudin tempus purus sit amet sollicitudin. Curabitur ac nulla libero. Proin pretium augue a arcu congue blandit. Maecenas ut risus eleifend nibh vestibulum ultricies. Duis vitae dui lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi facilisis mattis metus a fringilla. Mauris laoreet elementum scelerisque.
                Mauris sollicitudin tempus purus sit amet sollicitudin. Curabitur ac nulla libero. Proin pretium augue a arcu congue blandit. Maecenas ut risus eleifend nibh vestibulum ultricies. Duis vitae dui lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi facilisis mattis metus a fringilla. Mauris laoreet elementum scelerisque.
            </p>
          </div>
        </div>

        <div className="imageIntro">
          <img src={intro3} alt="" className='imagineIntro'/>
        </div>
      </div>





        
      
    </div>
  )
}

export default IntroJuniori
