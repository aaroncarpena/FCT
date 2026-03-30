import React from 'react'
import { useNavigate } from 'react-router-dom'
import delgadez from '../../../../assets/perdidaPeso.png'
import habitos from '../../../../assets/organizacionHabitos.png'
import asesoramiento from '../../../../assets/asesoramiento.png'
import './Servicios.css'

const Servicios = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Servicios</h1>
      <p className="servicios-intro">
        Te acompaño en el proceso de mejorar tu alimentación de forma real y sostenible, sin restricciones imposibles ni dietas estrictas.
      </p>

      <div className="servicios-contenedor">

        <div className="servicio">
          <img src={delgadez} alt="Pérdida de peso" />
          <h3>Pérdida de Peso</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.</p>
        </div>

        <div className="servicio">
          <img src={asesoramiento} alt="Asesoramiento de hábitos alimenticios" />
          <h3>Asesoramiento de Hábitos Alimenticios</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.</p>
        </div>

        <div className="servicio">
          <img src={habitos} alt="Organización de la alimentación" />
          <h3>Organización de la Alimentación</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.</p>
        </div>

      </div>

      <div className="servicios-cta">
        <p>¿No sabes qué servicio necesitas? Escríbeme y te ayudo a elegir.</p>
        <button className="servicios-cta-btn" onClick={() => navigate('/contacto')}>
          Contactar
        </button>
      </div>
    </>
  )
}

export default Servicios