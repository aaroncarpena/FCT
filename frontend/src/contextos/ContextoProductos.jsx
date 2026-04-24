import React, {createContext, useState} from 'react'

const contextoProductos = createContext();
const ContextoProductos = ({children}) => {

    const productoInicial = {
      
    }

    const [productos, setProductos] = useState();

    const datosAExportar = {
        productos,
    }
  return (
    <contextoProductos.Provider value={datosAExportar}>
      {children}
    </contextoProductos.Provider>
  )
}

export default ContextoProductos
export {contextoProductos}