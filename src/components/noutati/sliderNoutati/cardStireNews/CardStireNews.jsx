import React from "react";
import './CardStireNews.scss'

const CardStireNews = ({ titluStire, data, descriere, imagine }) => {
  const limitaDescriere = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit).trim() + "...";
  };

  const formateazaData = (data) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(data).toLocaleDateString('ro-RO', options);
  };

  return (
    <div className="card-stire">
      <h3>{titluStire}</h3>
      <p>Data publicării: {formateazaData(data)}</p>
      <p>{limitaDescriere(descriere, 250)}</p>
      <img src={`data:image/png;base64, ${imagine}`} alt="Imagine stire" />
    </div>
  );
};

export default CardStireNews;
