import React, { useState } from "react";
import "./BlogRecetas.css";

const recetas = [
  {
    id: 1,
    nombre: "Ensalada mediterránea",
    imagen:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Una receta fresca para comidas rápidas, con verduras crujientes, legumbres y un aliño sencillo que aguanta bien si la preparas con antelación.",
    contenidoExtra:
      "Para prepararla mezcla garbanzos cocidos, tomate, pepino, cebolla morada, aceitunas y queso fresco. Añade aceite de oliva, limón, perejil y una pizca de sal. Si quieres dejarla lista para llevar, guarda el aliño aparte y mézclalo justo antes de comer. También puedes sumar arroz integral, huevo cocido o atún para hacerla más completa.",
    categoria: "Comida",
    tiempoPreparacion: "15 min",
    dificultad: "Fácil",
  },
  {
    id: 2,
    nombre: "Crema de calabaza",
    imagen:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Una crema suave para cenas ligeras que se puede congelar en raciones y resolver varios días de la semana.",
    contenidoExtra:
      "Sofríe puerro y zanahoria con una cucharada de aceite. Incorpora calabaza en dados, cubre con caldo y cocina hasta que esté tierna. Tritura con una cucharada de yogur natural o queso batido para aportar cremosidad. Termina con semillas tostadas, pimienta y un chorrito de aceite de oliva.",
    categoria: "Cena",
    tiempoPreparacion: "30 min",
    dificultad: "Fácil",
  },
  {
    id: 3,
    nombre: "Tostadas con aguacate",
    imagen:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Un desayuno rápido, saciante y fácil de adaptar según lo que tengas en casa.",
    contenidoExtra:
      "Tuesta pan integral y cúbrelo con aguacate machacado, limón y sal. Para completar el plato puedes añadir huevo, queso fresco, tomate o salmón ahumado. Si necesitas más energía, acompaña con fruta y yogur natural. La clave está en combinar hidratos, grasa saludable y una fuente de proteína.",
    categoria: "Desayuno",
    tiempoPreparacion: "10 min",
    dificultad: "Fácil",
  },
];

const BlogRecetas = () => {
  const [recetasAbiertas, setRecetasAbiertas] = useState([]);

  const alternarReceta = (id) => {
    setRecetasAbiertas((recetasActuales) =>
      recetasActuales.includes(id)
        ? recetasActuales.filter((recetaId) => recetaId !== id)
        : [...recetasActuales, id],
    );
  };

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
            contenidoExtra,
            categoria,
            tiempoPreparacion,
            dificultad,
          }) => {
            const estaAbierta = recetasAbiertas.includes(id);

            return (
              <div key={id} className={`receta-card ${estaAbierta ? "expandida" : ""}`}>
                <img src={imagen} alt={nombre} />
                <div className="receta-card-body">
                  <div className="receta-info">
                    <span className="receta-categoria">{categoria}</span>
                    <span>Tiempo: {tiempoPreparacion}</span>
                    <span>Nivel: {dificultad}</span>
                  </div>
                  <h3 className="receta-card-nombre">{nombre}</h3>
                  <p>{descripcion}</p>
                  {estaAbierta && <p className="receta-extra">{contenidoExtra}</p>}
                  <button className="receta-btn" onClick={() => alternarReceta(id)}>
                    {estaAbierta ? "Leer menos" : "Leer más"}
                  </button>
                </div>
              </div>
            );
          },
        )}
      </div>
    </>
  );
};

export default BlogRecetas;
