import React, { useEffect, useState } from 'react';

import './ItemListContainer.css';
import Titulo from '../texts/Titulo'
import ItemList from './ItemList'

import btcmoon from './img/btcmoon.png';
import cake from './img/cake.png';
import ethath from './img/ethath.png';
import etheip from './img/etheip.png';
import metamask from './img/metamask.png';


function ItemListContainer() {
 

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData]=useState([]);


 
  useEffect(() => {

     fetch('/data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response =>   response.json())
    .then(function(resp) {
      console.log(resp);
      setData(resp)
    });

    const cards = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([


         ]);
      }, 2000);
    });

     cards.then((response) => {
      setItems(response);
      setLoading(false);
    });
      
  },  []);

   
    return (
  < >
  <Titulo  texto="Elegí el diseño" />
  <ItemList items={data} loading={loading} />

  </>  
  ); }

 
export default ItemListContainer;
