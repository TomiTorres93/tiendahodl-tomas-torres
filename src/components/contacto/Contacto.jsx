import React, { useState } from 'react';
import Titulo from '../texts/Titulo'
import logohodlcont from './img/logohodlcont.png';
import './Contacto.css';

function Contacto({}) {
  
    return (


    <div>
 
        <Titulo  texto="Contactanos" />


    <form class="sectionwa-subtit-cont"  id="form">

        <div className='formlogocont'>
        <img src={logohodlcont} className="logoIcon2" alt="Logo de la marca" />
        </div>
   
        <div className="inputsCont">
        <p className="tituloinput"></p>
        <input className="input" type="text" name="username" placeholder="Ingresá tu nombre" id="username"> 
        </input>
   
   

    <textarea className="textarea" type="text" name="usermessage" placeholder="Escribí tu mensaje" id="usermessage"></textarea>

    
    <div className='buttoncont'>
    <a type="submit" className="wabotonmensaje" id="enviarmensaje">  Enviar Whatsapp  </a>
    <a type="submit" className="wabotonmensaje" id="enviarmail"> Enviar email </a>
    </div>
    </div>
    </form>


    </div>


    ); }

export default Contacto;
