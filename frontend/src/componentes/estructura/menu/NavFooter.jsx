import React from 'react'
import './NavFooter.css'
const NavFooter = () => {
  return (
    <>
        <section>
          <h3 className="nav-footer-title">Enlaces</h3>
          <nav className="nav-footer">
            <a href="/">Inicio</a>
            <a href="/sobreMi">Sobre Mi</a>
            <a href="/servicios">Servicios</a>
            <a href="/programa">Programa</a>
            <a href="/talleres">Talleres</a>
            <a href="/cursoOnline">Curso Online</a>
            <a href="/blog">Blog</a>
          </nav>
        </section>
    </>
  )
}

export default NavFooter