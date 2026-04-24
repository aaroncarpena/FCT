import React from 'react'
import {contextoProductos} from '../contextos/ContextoProductos.jsx'
const useProductos = () => {
  const ctx = useContext()

  if(!ctx){
    throw new Error('useProductos debe ser usado dentro de un ContextoProductos.Provider')
  }
  return ctx
}

export default useProductos