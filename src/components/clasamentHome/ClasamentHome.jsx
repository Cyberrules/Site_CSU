import React, { useState, useEffect } from 'react'
import "./ClasamentHome.scss";
import "../meciuri/clasament/script"
import UltimulMeci from './ultimulMeci/UltimulMeci';
import UrmatorulMeci from './urmatorulMeci/UrmatorulMeci';
import SectiuneClasament from './sectiuneClasament/SectiuneClasament';

const Clasament = () => {

  return (
    <div className="meciuri-container">
      <UltimulMeci />
      <UrmatorulMeci/>
      <SectiuneClasament />
  </div>
  )
}

export default Clasament
