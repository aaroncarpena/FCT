import React from 'react'
import './SobreMiFilosofiaTrabajo.css'
import fotoPrueba from '../../../../assets/Foto prueba 2.webp'

const SobreMiFilosofiaTrabajo = () => {
  return (
    <>
        <div className='filosofia-trabajo-contenedor'>
            <div className='filosofia-trabajo-texto'>
                <h2 className='titulo-filosofia-trabajo'>Filosofía de Trabajo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, modi dolor hic accusantium sit ducimus.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quaerat.</p>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In neque, quae ipsum maiores fugiat corrupti adipisci doloremque. Dolorum, sint nisi.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptate recusandae voluptates soluta?</p>
            </div>
            <img src={fotoPrueba} alt="Foto de prueba" />
        </div>
    </>
  )
}

export default SobreMiFilosofiaTrabajo