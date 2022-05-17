import React, { useState, useEffect } from 'react';
import './Productos.css';
import Producto from './Producto'
import ItemCount from '../listcont/ItemCount';
import AfterCount from '../listcont/AfterCount';

  

const data = [    {"id":"1", "tipo": "BUZO", "stock":"1", "precio":"6500", "img":"https://drive.google.com/uc?id=1_92ZJra32ZIsYuxbBf1CpcXjgn3jmUeg"},
{"id":"2", "tipo": "REMERA", "stock":"2", "precio":"3500", "img":"https://drive.google.com/uc?id=1DiNWCOli3N1mDw9EAAnPVrApjHTo5fI5"},
{"id":"3", "tipo": "SHORTS", "stock":"3", "precio":"2500", "img":"https://drive.google.com/uc?id=1_lO_qnqwEQQ3Yf2npJJqMwihWHLcp572"}
]


function ProductosCont({producto}) {
  
   const [botonTipo, setBotonTipo] = useState('itemcount')
   const [stock, setStock] = useState(0)
   const [tipo, setTipo] = useState({})
   const [precio, setPrecio] = useState({})


   const itemcountChange = () => {
    if (botonTipo === "itemcount") {
      setBotonTipo("seguir o volver")
    } else {setBotonTipo("itemcount")}
    
   }
 
   console.log(botonTipo)
    return (
  
  <div className='productositemsCont'>

      {data.map((data) => (
        
            <Producto stockchange={() => { setStock(data.stock); setTipo(data.tipo); setPrecio(data.precio)}} className="cardprocont" key={data.id} {...data}   />
      ))}

  { botonTipo === 'itemcount' ?
      <ItemCount stock={stock} tipo={tipo} producto={producto} precio={precio} cantidad={stock} itemcount={itemcountChange} /> :

      <AfterCount itemcount={itemcountChange} />
    }
  </div>
    ); 
    
}

    
export default ProductosCont;

