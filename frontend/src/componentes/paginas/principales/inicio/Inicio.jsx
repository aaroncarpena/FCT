import React from 'react'
import {Rating} from 'primereact'
import InicioIntroduccion from './InicioIntroduccion.jsx'
import BotonInicioSesion from '../BotonInicioSesion.jsx'
import InicioRating from './InicioRating.jsx'
import './Inicio.css'
const Inicio = () => {
  return (
    <>
      <InicioIntroduccion />
      <BotonInicioSesion />
      <InicioRating />
    </>
  )
}

export default Inicio