import React, { useEffect, useState, useContext } from 'react';
import Item from './Item'
import Loader from './Loader';
import './ItemListContainer.css';


export default function ItemList({ loading, items}) {

 
  return (

    <div className='itemsCont'>


        {loading
        ?         <Loader/> : 


        items.map((item) =>  <Item key={item.id} {...item}/>)}

      
    </div>
  )
}
