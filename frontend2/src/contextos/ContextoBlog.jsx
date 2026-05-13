import React, {createContext, useState} from 'react'

const contextoBlog = createContext()
const ContextoBlog = (children) => {

    const recetaInicial = {
      title: '',
      slug: '',
      excerpt: '',
      body: '',
      prep_time: '',
      cook_time: '',
      servings: 4,
      difficulty: 'easy',
      ingredients: [],
      status: 'draft',
      published_at: null,
    }
    const articuloInicial = {
      title: '',
      slug: '',
      excerpt: '',
      body: '',
      status: 'draft',
      published_at: null,
    }

    const [receta, setReceta] = useState(recetaInicial);
    const [articulo, setArticulo] = useState(articuloInicial);

    const datosAExportar = {
        receta,
        articulo
    }

  return (
    <contextoBlog.Provider value={datosAExportar}>{children}</contextoBlog.Provider>
  )
}

export default ContextoBlog
export {contextoBlog};