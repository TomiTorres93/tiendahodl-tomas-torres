import React, { useState, useEffect } from 'react';
import './Productos.css';
import Producto from './Producto'
import ItemCount from '../listcont/ItemCount';


  

const data = [    {"id":"1", "tipo": "BUZO", "stock":"1", "precio":"6500", "img":"https://drive.google.com/uc?id=1_92ZJra32ZIsYuxbBf1CpcXjgn3jmUeg"},
{"id":"2", "tipo": "REMERA", "stock":"2", "precio":"3500", "img":"https://drive.google.com/uc?id=1DiNWCOli3N1mDw9EAAnPVrApjHTo5fI5"},
{"id":"3", "tipo": "SHORTS", "stock":"3", "precio":"2500", "img":"https://drive.google.com/uc?id=1_lO_qnqwEQQ3Yf2npJJqMwihWHLcp572"}
]

function ProductosCont() {
 
   const [stock, setStock] = useState(0)



    
    return (
  
  <div className='productositemsCont'>

      {data.map((data) => (
        
            <Producto stockchange={(()=>  setStock(data.stock))} className="cardprocont" id={data.id} tipo={data.tipo} stock={data.stock} precio={data.precio} img={data.img}  />
      ))}
      <ItemCount stock={stock}/>
  </div>
    ); 
    
}

    
export default ProductosCont;

