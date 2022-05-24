import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { getFetch } from '../../data';


function ItemListContainer({}) {
 
  const [productos, setProductos]=useState([]);
  const [loading, setLoading] = useState(true);
  const { detalleID } = useParams()

  
  useEffect(() => {

    getFetch(detalleID)
    .then(respuesta=> setProductos(respuesta))
    .catch((err)=> console.log(err))
    .finally(() => setLoading(false)) 
  },  [detalleID]);


    return (
  < >


  <ItemDetail  img={productos.img} nombre={productos.nombre} descripcion={productos.descripcion}  loading={loading}/>
  
  </>  
  ); }

    
export default ItemListContainer;

