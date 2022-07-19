import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

// Componente Testimonio
function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../img/testimonio-${props.imagen}.png`)}
        alt={`Fotografía de ${props.descripcion} `}/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
          </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
          "{props.testimonio}"
        </p>{/* Cuando es necesario colocar comillas en un texto, lo colcamos fuera de las llaves del props */}
      
      </div>
    </div>
  );
}

export default Testimonio;