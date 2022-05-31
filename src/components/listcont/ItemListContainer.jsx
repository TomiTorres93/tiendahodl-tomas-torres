import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Titulo from '../texts/Titulo'
import ItemList from './ItemList';

import { Link } from "react-router-dom"
import { getFetch } from '../../data';
import { useParams } from 'react-router-dom';

import {getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore"

  // RANDOM BUTTON

  let randomID = Math.floor(Math.random() * 15);

  console.log(randomID)

function ItemListContainer( ) {
  

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productos, setProductos]=useState([]);

  const { id } = useParams()

// useEffect(() => {

//   const db = getFirestore()
//   const dbQuery = doc(db, "items", "TUuFE74Rssyyxm7EqyZm")
//   getDoc(dbQuery)
//   .then(resp => console.log({ id: resp.id, ...resp.data() }))
// }, [])

 useEffect(() => {

   const db = getFirestore()
   const QueryCollection = collection(db, "productos")


     if (id) {
      getDocs(QueryCollection)
        .then(resp =>   setProductos((resp.docs.map(item => ({ id: item.id, ...item.data()}) )).filter((prods)=> prods.categoria === id)))
        .catch((err)=>console.log(err))
        .finally(() => setLoading(false))
      } else {
        getDocs(QueryCollection)
        .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data()}) )))  
        .catch((err)=>console.log(err))
        .finally(() => setLoading(false))
      }


 }, [id])
 
   
  /// FETCH DE LOS PRODUCTOS///
  // useEffect(() => {


  
  //  },  [id]);

  ////SIMULACIÓN DE CARGA LAS CARDS - LOADER ///
  
  const cards = new Promise((resolve, reject) => {
     setTimeout(() => {resolve([]);}, 2000);
   });

    cards.then((cargarItems) => {
     setItems(cargarItems);
     setLoading(false);
   });



 
   return (
  < >


  <Titulo  texto="Elegí el diseño" />

  <div className='filtercont' >
  <p className='filterelementfilt'>FILTRO</p>

  <Link className='link filterelement' to={`/categoria/remera`}>
  REMERAS
  </Link>

  <Link className='link filterelement' to={`/categoria/gorra`}>
  GORRAS
  </Link>

  <Link className='link filterelement' to={`/`}>
  VER TODO
  </Link>

  </div>



  <ItemList items={productos} loading={loading}   />

  </>  
  ); }


 
export default ItemListContainer;
