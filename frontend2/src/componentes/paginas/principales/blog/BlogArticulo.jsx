import React, { useState } from "react";
import "./BlogArticulo.css";

const articulos = [
  {
    id: 1,
    nombre: "Cómo organizar un menú semanal sin estrés",
    imagen:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Planificar no tiene que ser rígido. La idea es crear una estructura sencilla que te ayude a comprar mejor y repetir menos decisiones cada día.",
    contenidoExtra:
      "Empieza eligiendo dos proteínas, tres verduras, un cereal y una legumbre. Con esa base puedes montar ensaladas completas, salteados, cremas y platos fríos. Deja huecos flexibles para comer fuera o aprovechar sobras. Una lista corta y realista suele funcionar mejor que un menú perfecto que no encaja con tu semana.",
  },
  {
    id: 2,
    nombre: "Snacks que sacian de verdad",
    imagen:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Un buen snack no es solo algo ligero: también debe ayudarte a llegar a la siguiente comida con hambre normal y energía estable.",
    contenidoExtra:
      "Combina fibra, proteína y grasa saludable. Por ejemplo, yogur natural con fruta y nueces, hummus con zanahoria, pan integral con queso fresco o un huevo cocido con tomate. Si sueles picar por ansiedad, prepara opciones visibles y deja los improvisados fuera de la primera línea de la despensa.",
  },
  {
    id: 3,
    nombre: "Pequeños cambios que mejoran tus comidas",
    imagen:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "No siempre hace falta empezar de cero. Ajustar porciones, añadir verduras o mejorar la proteína puede cambiar mucho el resultado.",
    contenidoExtra:
      "Una regla práctica es revisar el plato antes de servir: media parte verduras, un cuarto proteína y un cuarto hidratos de calidad. Después ajusta con aceite de oliva, frutos secos o aguacate según el hambre y el objetivo. Mantener estos criterios durante varias semanas suele dar más resultado que buscar una dieta distinta cada lunes.",
  },
];

const BlogArticulo = () => {
  const [articulosAbiertos, setArticulosAbiertos] = useState([]);

  const alternarArticulo = (id) => {
    setArticulosAbiertos((articulosActuales) =>
      articulosActuales.includes(id)
        ? articulosActuales.filter((articuloId) => articuloId !== id)
        : [...articulosActuales, id],
    );
  };

  return (
    <>
      <h1>Artículos</h1>
      <div className="articulo-contenedor">
        {articulos.map(({ id, nombre, imagen, descripcion, contenidoExtra }) => {
          const estaAbierto = articulosAbiertos.includes(id);

          return (
            <div key={id} className={`articulo-card ${estaAbierto ? "expandida" : ""}`}>
              <img src={imagen} alt={nombre} />
              <div className="articulo-card-body">
                <h3 className="articulo-card-nombre">{nombre}</h3>
                <p>{descripcion}</p>
                {estaAbierto && <p className="articulo-extra">{contenidoExtra}</p>}
                <button className="articulo-btn" onClick={() => alternarArticulo(id)}>
                  {estaAbierto ? "Leer menos" : "Leer más"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogArticulo;
