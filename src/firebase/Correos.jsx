import './Panel.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Titulo from '../components/texts/Titulo';



export default function Correos() {

  const [correos, setCorreos] = useState([])

  const db = getFirestore()

  //TOMA LA INFORMACIÓN DE FIRESTORE Y    GUARDA LAS ORDENES EN UN ESTADO
  useEffect(() => {
    const QueryCollection = collection(db, "correos")
    getDocs(QueryCollection)
      .then(resp => setCorreos(resp.docs.map(correo => ({ nombre: correo.nombre, ...correo.data() }))))
      .catch((err) => console.log(err))
  }, [])

  return (

    <>
      <Titulo texto="Correos" />
      <Link className='link' to={`/panel`}>
        <button className='ordenDataDetailButton'>VOLVER AL PANEL</button>
      </Link>
      <div className='correoscont'>

        {correos.map(correo => (
          <>
            <div className='correo'>
              <p> <span className='destDetail'>FECHA:</span>  {correo.fecha} </p>
              <p> <span className='destDetail'>EMAIL:</span> {correo.nombre} </p>
              <p> {correo.mensaje} </p>

              {/* CON ESTE BOTÓN SE REDIRIGE AL PROCESADOR DE EMAILS PARA RESPONDER EL CORREO */}
              <button className='destDetailboton' onClick={() => window.location = `mailto: ${correo.nombre}`}>RESPONDER</button>
            </div>
          </>

        ))}

      </div>

    </>
  )
}
