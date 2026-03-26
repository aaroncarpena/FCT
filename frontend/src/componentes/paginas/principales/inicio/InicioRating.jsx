import React from "react";
import { Rating } from "primereact/rating";
import { Carousel } from "primereact/carousel";
import "./InicioRating.css";
const InicioRating = () => {
  const participantes = [
    {
      nombre: "Juan",
      estrellas: 5,
      comentario: "¡Excelente programa! He perdido peso y me siento genial.",
    },
    {
      nombre: "María",
      estrellas: 5,
      comentario:
        "Los consejos de alimentación son prácticos y fáciles de seguir.",
    },
    {
      nombre: "Carlos",
      estrellas: 4,
      comentario: "Me encanta la variedad de recetas saludables que ofrecen.",
    },
    {
      nombre: "Ana",
      estrellas: 5,
      comentario:
        "El apoyo del equipo es increíble, siempre están ahí para ayudar.",
    },
    {
      nombre: "Luis",
      estrellas: 4,
      comentario:
        "He mejorado mi energía y mi bienestar general gracias a este programa.",
    },
    {
      nombre: "Elena",
      estrellas: 5,
      comentario:
        "Excelente experiencia, definitivamente recomendaría este programa.",
    },
  ];

  const template = (participante) => {
    return(
    <div className="participante-card">
        {/* Agregar foto de perfil del back */}
      <p className="participante-nombre">{participante.nombre}</p>
      <p className="participante-comentario">{participante.comentario}</p>
      <Rating value={participante.estrellas} readOnly cancel={false}></Rating>
    </div>
    );
  };
  return (
    <>
    <h2 className="titulo-rating">Reseñas de Nuestros Clientes</h2>
      <Carousel
        value={participantes}
        itemTemplate={template}
        numVisible={3}
        numScroll={3}
        circular
        autoplayInterval={4000}
      />
    </>
  );
};

export default InicioRating;
