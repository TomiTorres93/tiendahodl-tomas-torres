import React, { useEffect, useState } from 'react';

import './ItemListContainer.css';
import Titulo from '../texts/Titulo'
import ItemDetail from './ItemDetail'


import btcmoon from './img/btcmoon.png';
import cake from './img/cake.png';
import ethath from './img/ethath.png';
import etheip from './img/etheip.png';
import metamask from './img/metamask.png';


function ItemListContainer() {
 
  const [itemsdetail, setItemsdetail] = useState([]);
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
      setItemsdetail(response);
      setLoading(false);
    });
      
  },  []);

    return (
  < >


  <ItemDetail itemsdetail={data} loading={loading} img={etheip} nombre="EIP-1559" descripcion="A algunos solo les gusta ver el mundo arder." />
  
  </>  
  ); }

    
export default ItemListContainer;

