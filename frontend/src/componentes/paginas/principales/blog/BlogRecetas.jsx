import React from 'react'
import './BlogRecetas.css'
import ensalada from '../../../../assets/ensalda-ejemplo-1.jpg';
const recetas = [
  {
    id: 1,
    nombre: 'Ensalada mediterránea',
    imagen: 'https://via.placeholder.com/300x200',
    descripcion: 'Una ensalada fresca y saludable con ingredientes del mediterráneo.',
    categoria: 'Comida',
    tiempoPreparacion: '15 min',
    dificultad: 'Fácil',
  },
  {
    id: 2,
    nombre: 'Crema de calabaza',
    imagen: 'https://via.placeholder.com/300x200',
    descripcion: 'Crema suave y reconfortante perfecta para los días de frío.',
    categoria: 'Cena',
    tiempoPreparacion: '30 min',
    dificultad: 'Fácil',
  },
  {
    id: 3,
    nombre: 'Tostadas con aguacate',
    imagen: 'https://via.placeholder.com/300x200',
    descripcion: 'Desayuno rápido, nutritivo y delicioso.',
    categoria: 'Desayuno',
    tiempoPreparacion: '10 min',
    dificultad: 'Fácil',
  },
]

const BlogRecetas = () => {
  return (
    <>
    
      <h1>Recetas de Cocina</h1>
    <div className="recetas-contenedor">
      {recetas.map(({ id, nombre, imagen, descripcion, categoria, tiempoPreparacion, dificultad }) => (
        <div key={id} className="receta-card">
          {/*<img src={imagen} alt={nombre} /> */}
          <img src={ensalada} alt={nombre} />
          <div className="receta-card-body">
            <span className="receta-categoria">{categoria}</span>
            <h3 className='receta-card-nombre'>{nombre}</h3>
            <p>{descripcion}</p>
            <div className="receta-info">
              <span>⏱ {tiempoPreparacion}</span>
              <span>📊 {dificultad}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default BlogRecetas