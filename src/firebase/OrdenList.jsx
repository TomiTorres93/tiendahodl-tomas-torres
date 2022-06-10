import './Panel.css';

import React, { useEffect, useState, useContext } from 'react';
import { useCartContext } from '../context/CartContext'
import { Link } from "react-router-dom"
import { doc, addDoc, setDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId} from 'firebase/firestore';
import Orden from './Orden';
import Titulo from '../components/texts/Titulo';



export default function OrdenList({ordenes}) {
    const db = getFirestore()

  return (

    <> 
    <div className='ordenCont'> 
        <p className='ordenData'>ID</p>
        <p className='ordenData'> NOMBRE</p>
        <p className='ordenData'> FECHA</p>
        <p className='ordenData'>TOTAL</p>
        <p className='ordenData'>EMAIL</p>
        <p className='ordenData'>FECHA</p>
        <p className='ordenData'>TELEFONO</p>
    </div>
 
 {ordenes.sort(function(a,b){ return new Date(b.date) - new Date(a.date);
      }).map((order) =>
      
      <Orden key={order.id} id={order.id} precio={order.total} nombre={order.cliente.nombre} email={order.cliente.email} telefono={order.cliente.telefono} fecha={order.date} />
    )}
 
 
    </>
  )
}

