import './Panel.css';

import React, { useEffect, useState, useContext } from 'react';
import { useCartContext } from '../context/CartContext'
import { Link } from "react-router-dom"
import { doc, addDoc, setDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId} from 'firebase/firestore';

import Titulo from '../components/texts/Titulo';



export default function Orden({id, nombre, fecha, precio, items, email, telefono}) {
    const db = getFirestore()



  return (

    <> 


    <div className='ordenCont'> 
        <p className='ordenData'>{id.substring(0,5)}</p>
        <p className='ordenData'>{fecha}</p>
        <p className='ordenData'> {nombre}</p>
        <p className='ordenData'>{email}</p>
         <p className='ordenData'>{telefono}</p>
        <p className='ordenData'>{items}</p>
        <p className='ordenData'>${precio}</p>
        
    </div>
 
    </>
  )
}
