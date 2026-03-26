import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import "./Nav.css";

const Nav = () => {
  const [blogAbierto, setBlogAbierto] = useState(false);

  return (
    <nav className="nav-principal">
      <a href="/">
        <img src={Logo} alt="Logo" className="logo" />
      </a>
      <NavLink
        className={({ isActive }) => (isActive ? "links active" : "links")}
        to="/"
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "links active" : "links")}
        to="/sobreMi"
      >
        Sobre Mi
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "links active" : "links")}
        to="/servicios"
      >
        Servicios
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "links active" : "links")}
        to="/programa"
      >
        Programa
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "links active" : "links")}
        to="/talleres"
      >
        Talleres
      </NavLink>

      <div className="dropdown">
        <NavLink
          className={({ isActive }) => (isActive ? "links active" : "links")}
          to="/blog/recetas"
        >
          Blog
        </NavLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#FDF6EC"
          className="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
          onClick={() => setBlogAbierto(!blogAbierto)}
          style={{ cursor: "pointer" }}
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
        {blogAbierto && (
          <div className="dropdown-menu">
            <NavLink
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
              to="/blog/recetas"
            >
              Recetas
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
              to="/blog/articulos"
            >
              Artículos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
              to="/blog/videos"
            >
              Vídeos
            </NavLink>
          </div>
        )}
      </div>

      <NavLink
        className={({ isActive }) => (isActive ? "links active" : "links")}
        to="/contacto"
      >
        Contacto
      </NavLink>
    </nav>
  );
};

export default Nav;