import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Despre from './components/despre/Despre';
import Meciuri from './components/meciuri/Meciuri';
import Noutati from './components/noutati/Noutati';
import Echipa from './components/echipa/Echipa';
import Juniori from './components/juniori/Juniori';

function App() {
  return (
    <div className='dimensiune'>
      <Navbar /> 
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/despre" element={<Despre />} />
            <Route path="/meciuri" element={<Meciuri />} />
            <Route path="/noutati" element={<Noutati />} />
            <Route path="/echipa" element={<Echipa />} />
            <Route path="/juniori" element={<Juniori />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
