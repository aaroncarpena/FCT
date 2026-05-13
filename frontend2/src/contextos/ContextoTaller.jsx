import React, {} from 'react'

const contextoTaller = createContext()

const ContextoTaller = ({children}) => {
  const [taller, setTaller] = useState()

  const datosAExportar = {
    taller
  }

  return (
    <contextoTaller.Provider value={datosAExportar}>
      {children}
    </contextoTaller.Provider>
  )
}

export default ContextoTaller
export {contextoTaller}