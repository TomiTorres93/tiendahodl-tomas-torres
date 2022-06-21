import './Panel.css';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import Titulo from '../components/texts/Titulo';
import { Link } from "react-router-dom"
import Input from './Input';


export default function Panel() {
  const db = getFirestore()

  const [validacion, setValidacion] = useState(false)
  const [usuario, setUsuario] = useState("")
  const [usuarioValidado, setUsuarioValidado] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [contraseñaValidada, setContraseñaValidada] = useState("")
  const [admins, setAdmins] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
  }


  // TOMA LA LISTA DE ADMINS Y LAS GUARDA EN EL STATE ADMINS

  useEffect(() => {
    const QueryCollection = collection(db, "admin")
    getDocs(QueryCollection)
      .then(resp => setAdmins(resp.docs.map(admin => ({ ...admin.data() }))))
      .catch((err) => console.log(err))
  }, [])

  console.log(admins)

  // ESTA FUNCIÓN COMPRUEBA QUE EL USUARIO Y CONTRASEÑA EXISTAN Y COINCIDAN EN FIREBASE
  // Y DA ACCESO AL PANEL DE ADMINISTRACIÓN

  const validarUsuario = () => {

    const admincheck = admins.some(admin => admin.usuario === usuarioValidado && admin.contraseña === contraseñaValidada)

    if (admincheck === true) {
      return setValidacion(true)
    } else {
      return console.log("Usuario o contraseña incorrectos")
    }
  }

  //PANEL DE ADMINISTRACIÓN, DESDE DONDE SE PUEDE AGREGAR PRODUCTOS 
  //VER LAS ÓRDENES DE COMPRA Y LOS CORREOS DE LOS CLIENTES
  return (
    <>

      <div className='validacionCont'>
        {validacion === false ?
          <><Titulo texto="Panel de administración" />
            <form className='formAgregarProducto' action="" onSubmit={handleSubmit}>

              <Input alert="displayNone" titulo="usuario" type="text" place="Ingresar usuario" onchange={(e) => setUsuario(e.target.value)} />

              <Input alert="displayNone" titulo="contraseña" type="password" place="Ingresar contraseña" onchange={(e) => setContraseña(e.target.value)} />

              <input type="checkbox" className='displayNone' onClick={validarUsuario()} />

              <button className='agregarProducto' type='submit' onClick={() => {
                setUsuarioValidado(usuario); setContraseñaValidada(contraseña)
              }}> Ingresar</button>
            </form>
          </>
          :
          <>
            <Titulo texto="Panel de administración" />
            <div className='panelCont'>
              <Link to={`/panel/productos`}>
                <button className='panelButton'>Agregar productos</button>
              </Link>

              <Link to={`/panel/ordenes`}>
                <button className='panelButton'>Órdenes</button>
              </Link>

              <Link to={`/panel/correos`}>
                <button className='panelButton'>Correos</button>
              </Link>
            </div>
          </>}
      </div>
    </>
  )
}
