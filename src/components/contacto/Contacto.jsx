import React, { useState } from 'react';
import Titulo from '../texts/Titulo'
import logohodlcont from './img/logohodlcont.png';
import { setDoc, doc, getFirestore } from 'firebase/firestore';

import './Contacto.css';

function Contacto({ }) {

    const db = getFirestore()
    const [mensaje, setMensaje] = useState()
    const [nombre, setNombre] = useState()
    const [enviado, setEnviado] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
      }


      //ESTA FUNCIÓN ENVÍA EL MENSAJE A FIREBASE, EN "CORREOS"
      //LOS MENSAJES SE VISUALIZAN EN EL PANEL DE ADMINISTRACIÓN
      const enviarmensaje = () => {

        setDoc(doc(db, "correos", nombre + mensaje.length + Math.random()), {
         nombre:nombre, 
         mensaje: mensaje,
         fecha: Date().substring(0, 24),
      }) 
 
        .then(res => console.log(res))
        .catch(err => console.log(err))
         // .finally((() => console.log(nuevoProducto)))
     }  
    
    return (
        <div>
            <Titulo texto="Contactanos" />
            <form class="sectionwa-subtit-cont"  onSubmit={handleSubmit}>

                <div className='formlogocont'>
                </div>

                <div className="inputsCont">
                    <p className="tituloinput"></p>
                    <input className="input" type="text" name="nombre" placeholder="Ingresá tu email" onChange={(e) => setNombre(e.target.value)}>
                    </input>
                    <textarea className="textarea" type="text" name="mensaje" placeholder="Escribí tu mensaje" onChange={(e) => setMensaje(e.target.value)}></textarea>

                    {enviado === false ? <div className='buttoncont'>
                        <a type="submit" className="wabotonmensaje" onClick={() => {
                          enviarmensaje(); setEnviado(true)
                        } }> Enviar mensaje </a>
                    </div> : <div className='buttoncont'>
                        <a type="submit" className="wabotonmensaje" > ¡Enviado!</a>
                    </div>}
                    
                </div>
            </form>
        </div>
    );
}

export default Contacto;
