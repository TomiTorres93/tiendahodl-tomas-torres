import React, { useEffect, useState } from 'react';

import './ItemListContainer.css';
import Titulo from '../texts/Titulo'
import ItemList from './ItemList'
import ItemDetail from './ItemDetail'

import btcmoon from './img/btcmoon.png';
import cake from './img/cake.png';
import ethath from './img/ethath.png';
import etheip from './img/etheip.png';
import metamask from './img/metamask.png';


function ItemListContainer() {
 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  


  useEffect(() => {

    const cards = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {id: 0, nombre:"OLD BUT GOLD", img: btcmoon , descripcion:"Todos empezamos comprando algunos satoshis.",
          stock: 5}, 
      
          {id: 1, nombre: "EIP-1559", img: etheip, descripcion: "A algunos solo les gusta ver el mundo arder.", stock: 5},
      
          {id: 2, nombre: "EIP-1559", img: ethath, descripcion: "¿Nuestra criptomoneda y blockchain favorita?", stock: 5},
      
          {id: 3, nombre: "PANCAKE NEON", img: cake, descripcion: "¿Los Syrup Pools te hicieron pensar en dejar tu laburo?", stock: 5},
      
          {id: 4, nombre: "FOX", img: metamask, descripcion: "La wallet del zorrito. No la nombres en Twitter.", stock: 5} 
        ]);
      }, 2000);
    });

    cards.then((response) => {
      setItems(response);
      setLoading(false);
    });
  }, []);
 
    return (
  < >
  <Titulo  texto="Elegí el diseño" />
  <ItemList items={items} loading={loading} />
  {/* <ItemDetail  /> */}

  </>  
  ); }

    
export default ItemListContainer;
