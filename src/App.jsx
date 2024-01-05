import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.scss';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Despre from './components/despre/Despre';
import Meciuri from './components/meciuri/Meciuri';
import Noutati from './components/noutati/Noutati';
import Echipa from './components/echipa/Echipa';
import Juniori from './components/juniori/Juniori';
import PrezentareJucator from './components/home/prezentareJucator/PrezentareJucator';
import CardLotEchipe from './components/juniori/cardLotEchipe/CardLotEchipe'
import ListaCarduriJuniori from './components/juniori/listaCarduriJuniori/ListaCarduriJuniori'

import Administrator from './components/administrator/Administrator';
import MeciuriAdmin from './components/administrator/meciuriadmin/MeciuriAdmin';
import Utilizatori from './components/administrator/utilizatori/Utilizatori';
import EchipaAdmin from './components/administrator/echipaadmin/EchipaAdmin';
import JucatoriAdmin from './components/administrator/jucatoriadmin/JucatoriAdmin';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent = () => {
  const location = useLocation();
  const isPrezentareJucatorRoute = location.pathname.includes('/prezentareJucator');

  return (
    <div className='dimensiune'>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="/meciuri" element={<Meciuri />} />
        <Route path="/noutati" element={<Noutati />} />
        <Route path="/echipa" element={<Echipa />} />
        <Route path="/juniori" element={<Juniori />} />
        <Route path="/prezentareJucator/:playerId" element={<PrezentareJucator />} />
        <Route path="/" element={<CardLotEchipe />} />
        <Route path="/lista-juniori/:termen" element={<ListaCarduriJuniori />} />

        <Route path="/administrator/*" element={<Administrator />} />
        <Route path="/meciuriadmin" element={<MeciuriAdmin />} />
        <Route path="/utilizatori" element={<Utilizatori />} />
        <Route path="/echipaadmin" element={<EchipaAdmin />} />
        <Route path="/jucatoriadmin" element={<JucatoriAdmin />} />
      </Routes>
      {!isPrezentareJucatorRoute && <Footer />}
    </div>
  );
};

export default App;
