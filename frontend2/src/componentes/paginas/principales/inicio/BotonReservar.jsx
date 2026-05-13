import React from 'react'
import {Link} from 'react-router-dom'
import './BotonReservar.css'
const BotonInicioSesion = () => {
  return (
    <section>
        <Link className="btn" to="/contacto">Reservar</Link>
      </section>
  )
}

export default BotonInicioSesion