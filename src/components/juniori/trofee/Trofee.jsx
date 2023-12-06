import React from 'react'
import './Trofee.scss';


const Trofee = ({imagine, denumire, pozitie, an }) => {
  return (
    <div className="card-trofeu">
      <div className="imagine-trofeu">
        <img src={imagine} alt=""  className='imagine-trofeu'/>
      </div>
      <p className="denumire-trofeu">{denumire}</p>
      <p className='pozitie-trofeu'>{pozitie}</p>
      <p className='an-trofeu'>{an}</p>
    </div>
  );
};

export default Trofee;
