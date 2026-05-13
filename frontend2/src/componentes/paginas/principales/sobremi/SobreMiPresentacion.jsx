import React from "react";
import './SobreMiPresentacion.css'
import fotoPrueba from '../../../../assets/Foto prueba 2.webp'
const SobreMiPresentacion = () => {
  return (
    <>
    <div  className='sobremi-presentacion-contenedor'>

      <img src={fotoPrueba} alt="Foto" />
      <div className="sobremi-presentacion-texto">
        <h2 className="nombre">Laura Manzano</h2>
        <p>Lorem ipsum dolor sit.</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          beatae consequatur, asperiores a tenetur maxime?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ratione
          dolorum ab reiciendis ipsum placeat?
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, dicta!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptatum nemo mollitia ducimus debitis fugit? Minus, recusandae.
        </p>
      </div>
    </div>
    
    </>
    
  );
};

export default SobreMiPresentacion;
