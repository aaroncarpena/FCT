import React from 'react'
import {Link} from 'react-router-dom'
import './BotonInicioSesion.css'
const BotonInicioSesion = () => {
  return (
    <section>
        <Link className="btn" to="/iniciarSesion">Reserva 1ª Sesión</Link>
      </section>
  )
}

export default BotonInicioSesion