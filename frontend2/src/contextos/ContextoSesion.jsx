import React, {createContext, useState} from 'react'

const contextoSesion = createContext();

const ContextoSesion = ({children}) => {

    const [sesion, setSesion] = useState();
    const [usuario, setUsuario] = useState();
    const [token, setToken] = useState();
    const [sesionIniciada, setSesionIniciada] = useState(false);
    
    
    const login = async() => {
        
    }
    
    const datosAExportar = {
        sesion,
        usuario,
        token,
        sesionIniciada,
    };
  return (
    <contextoSesion.Provider value={datosAExportar}>
      {children}
    </contextoSesion.Provider>
  )
}

export default ContextoSesion
export {contextoSesion}