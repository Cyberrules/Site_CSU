import React from 'react'
import './InformatiiJucator.scss'

const InformatiiJucator = ({ playerDetails }) => {
    if (!playerDetails) return null;

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };

    return (
      <div className="informatiiJuc">
        <p>Data nașterii: {formatDate(playerDetails.dataNasterii)}</p>
      </div>
    );
}

export default InformatiiJucator
