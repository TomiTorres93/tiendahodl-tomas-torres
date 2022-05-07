import React, { useEffect, useState } from 'react';
import Item from './Item'
import Loader from './Loader';


export default function ItemList({ loading, items}) {

    const loaders = [1];

  return (

    <div className='itemsCont'>

        {loading
        ? loaders.map((loader) => <Loader key={loader} />) : 
        items.map((item) => <Item key={item.img} {...item} />)}

    </div>
  )
}
