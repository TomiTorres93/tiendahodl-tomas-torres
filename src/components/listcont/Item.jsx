import React, { useState } from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount';



function Item({img, id, producto, descripcion, stock}) {

  // const [itemdetail, setitemdetail] = useState(false)
  // const toggleitemdetail = () => {
  //   itemdetail ? setitemdetail(false) : setitemdetail(true); }

  


    return (

      // onClick={ToggleSwitch2} className={switchToggle2 ? "cardcont2" : "cardcont"}    
  <div className="cardcont" id={id} onClick="" >
        <img src={img} className="cardimg" alt={producto} />
        <p className="cardTitulo">{producto}</p>
        <p className="cardDescripcion">{descripcion}</p>

        <ItemCount stock={stock}/>
  </div>
    ); }

export default Item;
