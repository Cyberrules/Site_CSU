import React from 'react'
import "./Meciuri.scss"
import ListaMeciuriJucate from './listaMeciuriJucate/ListaMeciuriJucate'
import Clasament from "./clasament/Clasament"
import ListaMeciuriViitoare from './listaMeciuriViitoare/ListaMeciuriViitoare'
import UrmatorulMeci from '../meciuri/urmatorulMeci/UrmatorulMeci'

const Meciuri = () => {
  return (
    <div className='componentaMeciuri'>

    <div className='catreClasament'>
      <a href="#clasament" className='catreClasament'>CLASAMENT➜</a>
    </div>

      <UrmatorulMeci/>
      

      <div className='containerUltimeleRezultate'>
        <p className='ultimeleRezultate'>ULTIMELE REZULTATE</p>
        <ListaMeciuriJucate />
      </div>

      <div className='contMeciuriViitoare'>
        <p className='meciuriViitoare'>URMĂTOARELE MECIURI</p>
        <ListaMeciuriViitoare />
      </div>

      <div id='clasament'>
        <Clasament />
      </div>
        
    </div>
  )
}

export default Meciuri