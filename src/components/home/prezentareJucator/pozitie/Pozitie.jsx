import React from 'react'

const Pozitie = ({ playerDetails }) => {
    if (!playerDetails) return null;

    return (
      <div className="textPozitie">
        <p>Poziție: {playerDetails.pozitie}</p>
      </div>
    );
}

export default Pozitie
