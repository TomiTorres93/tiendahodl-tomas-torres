import './Panel.css';

import React, { useEffect, useState, useContext } from 'react';
import { useCartContext } from '../context/CartContext'
import { Link } from "react-router-dom"
import { doc, addDoc, setDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId} from 'firebase/firestore';

import Titulo from '../components/texts/Titulo';



export default function Miordenitem({categoria, nombre, talle, cantidad, precio}) {
    const db = getFirestore()



  return (

    <> 


    <div className='ordenCont'> 

        <p className='ordenData'> {categoria.toUpperCase() }</p>
        <p className='ordenData'> {nombre.toUpperCase() }</p>
        <p className='ordenData'> <span className='detalle'>TALLE</span> {talle.toUpperCase() }</p>
        <p className='ordenData'>{cantidad} u.</p>
        <p className='ordenData'> ${precio}</p>
    </div>
 
    </>
  )
}
