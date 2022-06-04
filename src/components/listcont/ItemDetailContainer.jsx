import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore"


function ItemListContainer({}) {
 
  const [productos, setProductos]=useState([]);
  const [loading, setLoading] = useState(true);
  const { detalleID } = useParams()


  useEffect(() => {

    const db = getFirestore()
    const dbQuery = doc(db, "productos", detalleID)
    getDoc(dbQuery)
    .then(resp => setProductos({ id: resp.id, ...resp.data() }))
    .catch((err)=>console.log(err))
    .finally(() => setLoading(false))
   

  }, [])


    return (
  < >



  <ItemDetail id={productos.id} imgpro={productos.imgpro} img={productos.img} nombre={productos.nombre} categoria={productos.categoria} precio={productos.precio} descripcion={productos.descripcion} cantidad={productos.stock} loading={loading} /> 
  </>  
  ); }

    
export default ItemListContainer;

