import React from "react";
import { useNavigate } from "react-router-dom";
import "./Programa.css";

const Programa = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Programa</h1>
      <p className="programa-intro">
        Elige el plan que mejor se adapte a tus objetivos y empieza a cambiar tu
        alimentación hoy.
      </p>

      <div className="programa-contenedor">
        <div className="programa-card">
          <h3 className="programa-card-titulo">Primera Consulta</h3>
          <p className="programa-card-precio">Gratis</p>
          <ul className="programa-card-lista">
            <li>Valoración inicial completa</li>
            <li>Análisis de hábitos alimenticios</li>
            <li>Orientación personalizada</li>
          </ul>
          <button
            className="programa-btn"
            onClick={() => navigate("/contacto")}
          >
            Reservar
          </button>
        </div>

        <div className="programa-card programa-card-destacado">
          <span className="programa-card-badge">Más popular</span>
          <h3 className="programa-card-titulo">Bono 4 Sesiones</h3>
          <p className="programa-card-precio">120€</p>
          <ul className="programa-card-lista">
            <li>4 sesiones de seguimiento</li>
            <li>Plan de alimentación personalizado</li>
            <li>Seguimiento mensual</li>
            <li>Soporte por email</li>
          </ul>
          <button
            className="programa-btn"
            onClick={() => navigate("/contacto")}
          >
            Reservar
          </button>
        </div>

        <div className="programa-card">
          <h3 className="programa-card-titulo">Bono 8 Sesiones</h3>
          <p className="programa-card-precio">220€</p>
          <ul className="programa-card-lista">
            <li>8 sesiones de seguimiento</li>
            <li>Plan de alimentación personalizado</li>
            <li>Seguimiento quincenal</li>
            <li>Lista de la compra incluida</li>
            <li>Recetas adaptadas</li>
            <li>Soporte por WhatsApp</li>
          </ul>
          <button
            className="programa-btn programa-btn-destacado"
            onClick={() => navigate("/contacto")}
          >
            Reservar
          </button>
        </div>
      </div>
    </>
  );
};

export default Programa;
