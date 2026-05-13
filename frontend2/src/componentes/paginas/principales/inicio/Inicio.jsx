import React from 'react'
import {Rating} from 'primereact'
import InicioIntroduccion from './InicioIntroduccion.jsx'
import BotonReservar from './BotonReservar.jsx'
import InicioRating from './InicioRating.jsx'
import './Inicio.css'
const Inicio = () => {
  return (
    <>
      <InicioIntroduccion />
      <BotonReservar />
      <InicioRating />
    </>
  )
}

export default Inicio