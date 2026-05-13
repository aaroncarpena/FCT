import React from 'react'
import {contextoBlog} from '../contextos/ContextoBlog.jsx'
const useBlog = () => {
  const ctx = useContext()

  if(!ctx){
    throw new Error('useBlog debe ser usado dentro de un ContextoBlog.Provider')
  }
  return ctx
}

export default useBlog