import React, { useState, useEffect } from 'react';
import ImagineEchipa from '../assets/imgEchipa.png';
import './Home.scss';
import CardNoutati from '../cardNoutati/CardNoutati';
import SliderEchipa from '../echipaSlider/SliderEchipa';
import ClasamentHome from '../clasamentHome/ClasamentHome';
import Sponsori from './sponsori/Sponsori';


const Home = () => {

  const textHome ={
    titluDespre: 'Despre Noi',
    titluNoutati: 'Noutati',
    titluJucatori: 'JUCATORI',
    titluSponsori: 'SPONSORI',
    editia: 'Ediția:',
    subtitluDespre: 'Clubul Sportiv Universitatea Suceava',
    descriereDespre: 'Suntem o echipă de handbal din municipiul Suceava, România. Cea mai mare performanță a echipei este accederea în finala Cupei Challenge, pierdută în fața echipei CS UCM Reșița. În competițiile interne, CSU Suceava a câștigat medalia de bronz în Liga Națională, în sezonul 2010-2011, s-a clasat pe locul III în Cupa României, în sezonul 2022-2023.',
    textLink: 'Afla mai multe →'
  }

/*
  const [stiri, setStiri] = useState([]);
  useEffect(() => {
    fetch('https://........./stiri')
      .then(response => response.json())
      .then(data => {
        setStiri(data);
      })
      .catch(error => {
        console.error('A apărut o eroare:', error);
      });
  }, []);
  */

  const stiri = [
    {
      id: 1,
      imagine: ImagineEchipa,
      titlu: 'Titlu știre 1',
      continut: 'Conținutul știrii 1...'
    },
    {
      id: 2,
      imagine: ImagineEchipa,
      titlu: 'Titlu știre 2',
      continut: 'Conținutul știrii 2..hafbhjadfbasbfhasfhasvfhjasvfhsvfashjfvashjfvasljhfvsaj.'
    },
    {
      id: 3,
      imagine: ImagineEchipa,
      titlu: 'Titlu știre 3',
      continut: 'Conținutul știrii 2..hafbhjadfbasbfhasfhasvfhjasvfhsvfashjfvashjfvasljhfvsaj.'
    },
  ];

  const [editiiEchipa, setEditiiEchipa] = useState([]);
  const [editieSelectata, setEditieSelectata] = useState('');

  const numeEchipa = 'CSU Suceava';
  const categorie = 'Adulti';


  useEffect(() => {
    fetch(`http://localhost:5050/api/echipa/nume/${numeEchipa}/categorie/${categorie}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setEditiiEchipa(data.map(item => item.editia));
        const currentYear = new Date().getFullYear().toString();
        const editieCurenta = data.find(item => item.editia === currentYear);
        if (editieCurenta) {
          setEditieSelectata(editieCurenta.editia);
        } else if (data.length > 0) {
          setEditieSelectata(data[data.length - 1].editia);
        }
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);


  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (editieSelectata !== '') {
      fetch(`http://localhost:5050/api/jucator/echipa/${numeEchipa}/editia/${editieSelectata}/categoria/${categorie}`)
        .then(response => response.json())
        .then(data => {
          const sortedPlayers = data.sort((a, b) => {
            if (a.imagine && !b.imagine) {
              return -1;
            } else if (!a.imagine && b.imagine) {
              return 1;
            } else {
              return 0;
            }
          });
          setPlayers(sortedPlayers);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }
  }, [editieSelectata]);

  const handleEditieChange = event => {
    setEditieSelectata(event.target.value);
  };
  
  const uniqueSortedEditii = editiiEchipa.filter((value, index, self) => self.indexOf(value) === index).sort();




 

  const handlePlayerSelect = (playerId) => {
    window.location.href = `/prezentareJucator/${playerId}`;
  };

  return (
    <div>
       <div className="imaginePrezentare"></div>
        <div className="despre_noi">
            <div className="despre_text">
                <h1>{textHome.titluDespre}</h1>
                <h2>{textHome.subtitluDespre}</h2>
                <p>{textHome.descriereDespre}</p>
                <a className= "link" href='despre'>{textHome.textLink}</a>
            </div>
        </div>

        <div className="noutati-container">
            <div className="noutati">
                <h1>{textHome.titluNoutati}</h1> 
            </div>
            <div className='carduri'>
              {stiri.map((stire) => (
                <CardNoutati key={stire.id} stire={stire} />
                ))} 
            </div>
        </div>

        <ClasamentHome/>
 
        <div className="jucatori">
          <h4>{textHome.titluJucatori}</h4>
          <div className="dropdownEditie">
            <select id="selectorEditie" onChange={handleEditieChange} value={editieSelectata}>
              {uniqueSortedEditii.map(editie => (
                <option key={editie} value={editie}>
                  {textHome.editia} {editie}
                </option>
                ))}
              </select>
          </div>
        </div>

        
        <div className='sliderEchipa'>
          <SliderEchipa slides={players} onPlayerSelect={handlePlayerSelect} />
        </div>

        <div className="containerSponsori">
          <div className='titluSponsori'><h3 >{textHome.titluSponsori}</h3></div>
            <Sponsori />
        </div>

    </div>
  );
};

export default Home;
