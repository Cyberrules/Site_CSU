import React from 'react'
import "./Meciuri.scss"
import ListaMeciuriJucate from './listaMeciuriJucate/ListaMeciuriJucate'
import Clasament from "./clasament/Clasament"
import ListaMeciuriViitoare from './listaMeciuriViitoare/ListaMeciuriViitoare'

const Meciuri = () => {
  return (
    <div>
      

      <div className='containerUltimeleRezultate'>
        <p className='ultimeleRezultate'>ULTIMELE REZULTATE</p>
        <ListaMeciuriJucate />
      </div>

      <div className='contMeciuriViitoare'>
        <p className='meciuriViitoare'>URMĂTOARELE MECIURI</p>
        <ListaMeciuriViitoare />
      </div>


      <Clasament />
        
    </div>
  )
}

export default Meciuri