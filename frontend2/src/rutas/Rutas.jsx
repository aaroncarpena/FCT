import React from 'react'
import Inicio from '../componentes/paginas/principales/inicio/Inicio.jsx'
import SobreMi from '../componentes/paginas/principales/sobremi/SobreMi.jsx'
import Servicios from '../componentes/paginas/principales/servicios/Servicios.jsx'
import Programa from '../componentes/paginas/principales/programa/Programa.jsx'
import Talleres from '../componentes/paginas/principales/talleres/Talleres.jsx'
import Blog from '../componentes/paginas/principales/blog/Blog.jsx'
import Contacto from '../componentes/paginas/principales/contacto/Contacto.jsx'
import IniciarSesion from '../componentes/paginas/sesion/IniciarSesion.jsx'
import Registro from '../componentes/paginas/sesion/Registro.jsx'
import Error from '../componentes/paginas/error/Error.jsx'
import BlogRecetas from '../componentes/paginas/principales/blog/BlogRecetas.jsx'
import BlogArticulo from '../componentes/paginas/principales/blog/BlogArticulo.jsx'
import Tienda from '../componentes/paginas/principales/tienda/Tienda.jsx'
import { Route, Routes } from 'react-router-dom'
const Rutas = () => {
  return (
    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobreMi' element={<SobreMi />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/programa' element={<Programa />} />
        <Route path='/talleres' element={<Talleres />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/recetas' element={<BlogRecetas />} />
        <Route path='/blog/articulos' element={<BlogArticulo />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='*' element={<Error />} />
        <Route path='/iniciarSesion' element={<IniciarSesion />} />
        <Route path='/registro' element={<Registro />} />

    </Routes>
  )
}

export default Rutas