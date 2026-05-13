import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogArticulo.css";
import ensalada from "../../../../assets/ensalda-ejemplo-1.jpg";

const articulos = [
  {
    id: 1,
    nombre: "Artículo 1",
    imagen: ensalada,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet. In posuere mi ac rhoncus tempor. Phasellus sagittis, ex vel convallis molestie, neque urna efficitur nunc, at lacinia ipsum tortor id massa. Pellentesque eu efficitur ante. Nam gravida eros vel purus pharetra venenatis. Donec cursus leo nisl, sit amet cursus urna ultricies id. Curabitur quis convallis ipsum. Proin orci risus, rutrum a luctus id, fringilla ac mauris. In eget tellus massa. Sed vel lorem facilisis, placerat lacus ut, malesuada leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus non nibh ut quam mattis efficitur. Curabitur non nisi molestie, luctus erat et, volutpat tellus. Vivamus ut elit ultrices, volutpat libero quis, rhoncus metus. Phasellus ligula dui, egestas efficitur finibus vitae, venenatis a ante. Curabitur facilisis euismod pellentesque.",

  },
  {
    id: 2,
    nombre: "Artículo 2",
    imagen: ensalada,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet. In posuere mi ac rhoncus tempor. Phasellus sagittis, ex vel convallis molestie, neque urna efficitur nunc, at lacinia ipsum tortor id massa. Pellentesque eu efficitur ante. Nam gravida eros vel purus pharetra venenatis. Donec cursus leo nisl, sit amet cursus urna ultricies id. Curabitur quis convallis ipsum. Proin orci risus, rutrum a luctus id, fringilla ac mauris. In eget tellus massa. Sed vel lorem facilisis, placerat lacus ut, malesuada leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus non nibh ut quam mattis efficitur. Curabitur non nisi molestie, luctus erat et, volutpat tellus. Vivamus ut elit ultrices, volutpat libero quis, rhoncus metus. Phasellus ligula dui, egestas efficitur finibus vitae, venenatis a ante. Curabitur facilisis euismod pellentesque.",
  },
  {
    id: 3,
    nombre: "Artículo 3",
    imagen: ensalada,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet. In posuere mi ac rhoncus tempor. Phasellus sagittis, ex vel convallis molestie, neque urna efficitur nunc, at lacinia ipsum tortor id massa. Pellentesque eu efficitur ante. Nam gravida eros vel purus pharetra venenatis. Donec cursus leo nisl, sit amet cursus urna ultricies id. Curabitur quis convallis ipsum. Proin orci risus, rutrum a luctus id, fringilla ac mauris. In eget tellus massa. Sed vel lorem facilisis, placerat lacus ut, malesuada leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus non nibh ut quam mattis efficitur. Curabitur non nisi molestie, luctus erat et, volutpat tellus. Vivamus ut elit ultrices, volutpat libero quis, rhoncus metus. Phasellus ligula dui, egestas efficitur finibus vitae, venenatis a ante. Curabitur facilisis euismod pellentesque.",
  },
];

const BlogArticulo = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Artículos</h1>
      <div className="articulo-contenedor">
        {articulos.map(({ id, nombre, imagen, descripcion }) => (
          <div key={id} className="articulo-card">
            <img src={imagen} alt={nombre} />
            <div className="articulo-card-body">
              <h3 className="articulo-card-nombre">{nombre}</h3>
              <p>{descripcion}</p>
              <button
                className="articulo-btn"
                onClick={() => navigate(`/blog/articulos/${id}`)}
              >
                Leer más
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogArticulo;
