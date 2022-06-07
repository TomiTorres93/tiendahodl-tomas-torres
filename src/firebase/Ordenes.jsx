import './Panel.css';

import React, { useEffect, useState, useContext } from 'react';
import { useCartContext } from '../context/CartContext'
import { Link } from "react-router-dom"
import { doc, addDoc, setDoc, getFirestore, collection, updateDoc, writeBatch, where, query, getDocs, documentId} from 'firebase/firestore';
import Input from './Input';
import Titulo from '../components/texts/Titulo';

import OrdenList from './OrdenList';


export default function Ordenes() {
const db = getFirestore()

 const [ordenes, setOrdenes] = useState([])
 const [items, setItems] = useState([])


    useEffect(() => {

        const db = getFirestore()
        const QueryCollection = collection(db, "orders")
     

             getDocs(QueryCollection)
             .then(resp => setOrdenes(resp.docs.map(order => ({ id: order.id, ...order.data()}) ), setItems(resp.docs.map(order => order.data().items))  ))  
             .catch((err)=>console.log(err))
  
     
      }, [])


      

console.log(ordenes)
console.log(items)



  return (

    <> 
    <Titulo texto="Administrá tus órdenes" />
    
    <OrdenList ordenes={ordenes} items={items}  />
 
    </>
  )
}
