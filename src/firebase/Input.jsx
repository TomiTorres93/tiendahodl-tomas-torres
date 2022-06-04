import React, { useEffect, useState, useContext } from 'react';
import './Panel.css';

import { useCartContext } from '../context/CartContext'
import { Link } from "react-router-dom"


export default function Input({tipo, name, place, value, onchange, titulo}) {

  return (
<div className='inputCont'>
    <label className='label' htmlFor="nombre">{titulo}</label>
    <input className='input2' type={tipo} name={name} placeholder={place}  value={value} onChange=
    {onchange}
     />
</div>

  )
}
