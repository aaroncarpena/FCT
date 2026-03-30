import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Tienda.css'

const productos = [
  {
    id: 1,
    nombre: 'Guía de alimentación saludable',
    imagen: 'https://via.placeholder.com/200x200',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.',
    precio: '19.99€',
  },
  {
    id: 2,
    nombre: 'Pack de recetas saludables',
    imagen: 'https://via.placeholder.com/200x200',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.',
    precio: '24.99€',
  },
  {
    id: 3,
    nombre: 'Plan de menú semanal',
    imagen: 'https://via.placeholder.com/200x200',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.',
    precio: '14.99€',
  },
]

const Tienda = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Tienda</h1>
      <p className="tienda-intro">
        Recursos digitales para ayudarte a mejorar tu alimentación desde casa.
      </p>
      <div className="tienda-contenedor">
        {productos.map(({ id, nombre, imagen, descripcion, precio }) => (
          <div key={id} className="tienda-producto">
            <img src={imagen} alt={nombre} />
            <div className="tienda-producto-info">
              <h3>{nombre}</h3>
              <p>{descripcion}</p>
              <span className="tienda-producto-precio">{precio}</span>
              <button
                className="tienda-producto-btn"
                onClick={() => navigate(`/tienda/${id}`)}
              >
                Ver producto
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Tienda