import React from 'react'
import {contextoSesion} from '../contextos/ContextoSesion.jsx'
const useSesion = () => {
  const ctx = useContext()

  if(!ctx){
    throw new Error('useSesion debe ser usado dentro de un ContextoSesion.Provider')
  }
  return ctx
}

export default useSesion