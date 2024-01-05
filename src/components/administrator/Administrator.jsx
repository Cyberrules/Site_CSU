import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Administrator.scss';
import MeciuriAdmin from './meciuriadmin/MeciuriAdmin';
import Utilizatori from './utilizatori/Utilizatori'
import EchipaAdmin from './echipaadmin/EchipaAdmin';
import JucatoriAdmin from './jucatoriadmin/JucatoriAdmin';


const Administrator = () => {
  return (
    <div className="admin-container">
      <div className="sidebar">
        <ul>
          <li>
            <Link to='/administrator/utilizatori'>Utilizatori</Link>
            <Link to='/administrator/echipaadmin'>Echipe</Link>
            <Link to='/administrator/jucatoriadmin'>Jucatori</Link>
            <Link to='/administrator/meciuriadmin'>Meciuri</Link>
            
          </li>
        </ul>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/utilizatori" element={<Utilizatori />} />
          <Route path="/meciuriadmin" element={<MeciuriAdmin />} />
          <Route path="/echipaadmin" element={<EchipaAdmin />} />
          <Route path="/jucatoriadmin" element={<JucatoriAdmin />} />
        </Routes>
      </div>
    </div>
  );
};

export default Administrator;
