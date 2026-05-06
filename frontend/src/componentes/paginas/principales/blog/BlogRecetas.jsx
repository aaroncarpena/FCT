import React from "react";
import "./BlogRecetas.css";
import ensalada from "../../../../assets/ensalda-ejemplo-1.jpg";
const recetas = [
  {
    id: 1,
    nombre: "Ensalada mediterránea",
    imagen: "https://via.placeholder.com/300x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet. In posuere mi ac rhoncus tempor. Phasellus sagittis, ex vel convallis molestie, neque urna efficitur nunc, at lacinia ipsum tortor id massa. Pellentesque eu efficitur ante. Nam gravida eros vel purus pharetra venenatis. Donec cursus leo nisl, sit amet cursus urna ultricies id. Curabitur quis convallis ipsum. Proin orci risus, rutrum a luctus id, fringilla ac mauris. In eget tellus massa. Sed vel lorem facilisis, placerat lacus ut, malesuada leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus non nibh ut quam mattis efficitur. Curabitur non nisi molestie, luctus erat et, volutpat tellus. Vivamus ut elit ultrices, volutpat libero quis, rhoncus metus. Phasellus ligula dui, egestas efficitur finibus vitae, venenatis a ante. Curabitur facilisis euismod pellentesque.",
    categoria: "Comida",
    tiempoPreparacion: "15 min",
    dificultad: "Fácil",
  },
  {
    id: 2,
    nombre: "Crema de calabaza",
    imagen: "https://via.placeholder.com/300x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet. In posuere mi ac rhoncus tempor. Phasellus sagittis, ex vel convallis molestie, neque urna efficitur nunc, at lacinia ipsum tortor id massa. Pellentesque eu efficitur ante. Nam gravida eros vel purus pharetra venenatis. Donec cursus leo nisl, sit amet cursus urna ultricies id. Curabitur quis convallis ipsum. Proin orci risus, rutrum a luctus id, fringilla ac mauris. In eget tellus massa. Sed vel lorem facilisis, placerat lacus ut, malesuada leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus non nibh ut quam mattis efficitur. Curabitur non nisi molestie, luctus erat et, volutpat tellus. Vivamus ut elit ultrices, volutpat libero quis, rhoncus metus. Phasellus ligula dui, egestas efficitur finibus vitae, venenatis a ante. Curabitur facilisis euismod pellentesque.",
    categoria: "Cena",
    tiempoPreparacion: "30 min",
    dificultad: "Fácil",
  },
  {
    id: 3,
    nombre: "Tostadas con aguacate",
    imagen: "https://via.placeholder.com/300x200",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis dolor ut massa tincidunt imperdiet. In posuere mi ac rhoncus tempor. Phasellus sagittis, ex vel convallis molestie, neque urna efficitur nunc, at lacinia ipsum tortor id massa. Pellentesque eu efficitur ante. Nam gravida eros vel purus pharetra venenatis. Donec cursus leo nisl, sit amet cursus urna ultricies id. Curabitur quis convallis ipsum. Proin orci risus, rutrum a luctus id, fringilla ac mauris. In eget tellus massa. Sed vel lorem facilisis, placerat lacus ut, malesuada leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus non nibh ut quam mattis efficitur. Curabitur non nisi molestie, luctus erat et, volutpat tellus. Vivamus ut elit ultrices, volutpat libero quis, rhoncus metus. Phasellus ligula dui, egestas efficitur finibus vitae, venenatis a ante. Curabitur facilisis euismod pellentesque.",
    categoria: "Desayuno",
    tiempoPreparacion: "10 min",
    dificultad: "Fácil",
  },
];

const BlogRecetas = () => {
  return (
    <>
      <h1>Recetas de Cocina</h1>
      <div className="recetas-contenedor">
        {recetas.map(
          ({
            id,
            nombre,
            imagen,
            descripcion,
            categoria,
            tiempoPreparacion,
            dificultad,
          }) => (
            <div key={id} className="receta-card">
              {/*<img src={imagen} alt={nombre} /> */}
              <img src={ensalada} alt={nombre} />
              <div className="receta-card-body">
                <div className="receta-info">
                  <span className="receta-categoria">{categoria}</span>
                  <span>⏱ {tiempoPreparacion}</span>
                  <span>📊 {dificultad}</span>
                </div>
                <h3 className="receta-card-nombre">{nombre}</h3>
                <p>{descripcion}</p>
                <button className="receta-btn">Leer más</button>
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
};

export default BlogRecetas;
