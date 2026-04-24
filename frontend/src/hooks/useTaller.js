import React from 'react'
import {contextoTaller} from '../contextos/ContextoTaller.jsx'
const useTaller = () => {
  const ctx = useContext()

  if(!ctx){
    throw new Error('useTaller debe ser usado dentro de un ContextoTaller.Provider')
  }
  return ctx
}

export default useTaller