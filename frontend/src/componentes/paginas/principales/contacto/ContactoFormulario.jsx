import React from 'react'
import {Dropdown} from 'primereact/dropdown'
import './ContactoFormulario.css'
const ContactoFormulario = () => {
  return (
    <form className="contacto-form">
      <div className="contacto-campo">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombr    e" name="nombre" />
      </div>
      <div className="contacto-campo">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="contacto-campo">
        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" />
      </div>
      <div className="contacto-campo">
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje"></textarea>
      </div>
      <div className="contacto-campo">
        <Dropdown placeholder='Seleccione su modalidad' options={[
          {label: 'Presencial', value: 'presencial'},
          {label: 'Online', value: 'online'}
        ]} />
      </div>
      <button className="contacto-btn">Enviar</button>
    </form>
  )
}

export default ContactoFormulario