import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paginator } from "primereact/paginator";
import "./Tienda.css";

const productos = [
  {
    id: 1,
    nombre: "Guía de alimentación saludable",
    imagen: "https://via.placeholder.com/200x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.",
    precio: "19.99€",
  },
  {
    id: 2,
    nombre: "Pack de recetas saludables",
    imagen: "https://via.placeholder.com/200x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.",
    precio: "24.99€",
  },
  {
    id: 3,
    nombre: "Plan de menú semanal",
    imagen: "https://via.placeholder.com/200x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.",
    precio: "14.99€",
  },
  {
    id: 4,
    nombre: "Recetario de desayunos nutritivos",
    imagen: "https://via.placeholder.com/200x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.",
    precio: "12.99€",
  },
  {
    id: 5,
    nombre: "Guía de snacks saludables",
    imagen: "https://via.placeholder.com/200x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.",
    precio: "9.99€",
  },
  {
    id: 6,
    nombre: "Plan detox de 7 días",
    imagen: "https://via.placeholder.com/200x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.",
    precio: "22.99€",
  },
  {
    id: 7,
    nombre: "Recetario vegano completo",
    imagen: "https://via.placeholder.com/200x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.",
    precio: "17.99€",
  },
  {
    id: 8,
    nombre: "Guía de alimentación deportiva",
    imagen: "https://via.placeholder.com/200x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.",
    precio: "21.99€",
  },
  {
    id: 9,
    nombre: "Plan de alimentación antiinflamatoria",
    imagen: "https://via.placeholder.com/200x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.",
    precio: "18.99€",
  },
  {
    id: 10,
    nombre: "Recetario de postres saludables",
    imagen: "https://via.placeholder.com/200x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet.",
    precio: "11.99€",
  },
];

const PRODUCTOS_POR_PAGINA = 3;

const Tienda = () => {
  const navigate = useNavigate();
  const [first, setFirst] = useState(0);

  const productosVisibles = productos.slice(first, first + PRODUCTOS_POR_PAGINA);

  return (
    <>
      <h1>Tienda</h1>
      <p className="tienda-intro">
        Recursos digitales para ayudarte a mejorar tu alimentación desde casa.
      </p>
      <div className="tienda-contenedor">
        {productosVisibles.map(({ id, nombre, imagen, descripcion, precio }) => (
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
      <Paginator
        first={first}
        rows={PRODUCTOS_POR_PAGINA}
        totalRecords={productos.length}
        onPageChange={(e) => setFirst(e.first)}
      />
    </>
  );
};

export default Tienda;