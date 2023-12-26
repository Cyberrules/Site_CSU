import React, { useState } from 'react';
import CardNumeStiri from '../cardnumestiri/CardNumeStiri';
import './ListaCardStiri.scss';

export const ListaCardStiri = ({ selectedOption, selectedDate }) => {
  const initialDisplayCount = 3;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const listStiri = [
    { titlu: 'Titlu 1', data: '2023-02-10' },
    { titlu: 'Titlu 2', data: '2023-08-05' },
    { titlu: 'Titlu 3', data: '2023-03-20' },
    { titlu: 'Titlu 4', data: '2023-01-05' },
    { titlu: 'Titlu 5', data: '2023-09-10' },
    //{ titlu: 'Titlu 5', data: '2023-12-25' },
    { titlu: 'Titlu 5', data: '2023-12-24' },
    { titlu: 'Titlu 5', data: '2023-11-30' },
  ];

  const sortedListStiri = listStiri.sort((a, b) => new Date(b.data) - new Date(a.data));
  const filteredStiri = selectedOption
    ? (selectedOption.value === 'Calendar' && selectedDate)
      ? sortedListStiri.filter((stire) => new Date(stire.data).toDateString() === selectedDate.toDateString())
      : sortedListStiri.filter((stire) => {
        const currentDate = new Date();
        switch (selectedOption.value) {
          case 'Ieri':
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            return new Date(stire.data).toDateString() === yesterday.toDateString();
          case 'Ultimele 7 zile':
            return new Date(stire.data) >= currentDate.setDate(currentDate.getDate() - 7);
          case 'Ultimele luna':
            return new Date(stire.data) >= currentDate.setMonth(currentDate.getMonth() - 1);
          case 'Ultimul an':
            return new Date(stire.data) >= currentDate.setFullYear(currentDate.getFullYear() - 1);
            case 'Calendar':
              return new Date(stire.data) === selectedDate;
          default:
            return true;
        }
      })
    : sortedListStiri;

  const visibleStiri = filteredStiri.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 7);
  };

  return (
    <div className="listaCarduri-stiri">
      {visibleStiri.length > 0 ? (
        visibleStiri.map((stire, index) => (
          <CardNumeStiri key={index} titluStire={stire.titlu} data={stire.data} />
        ))
      ) : (
        <div className="mesaj-eroare">Nu există știri pentru perioada selectată.</div>
      )}
      {displayCount < sortedListStiri.length ? (
        <div className="sageata-in-jos" onClick={handleLoadMore}>
          &#9660;
        </div>
      ) : (
        <div className="sageata-in-sus" onClick={() => setDisplayCount(initialDisplayCount)}>
          &#9650;
        </div>
      )}
    </div>
  );
};

export default ListaCardStiri;