import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
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
      </Routes>
      {!isPrezentareJucatorRoute && <Footer />}
    </div>
  );
};

export default App;
