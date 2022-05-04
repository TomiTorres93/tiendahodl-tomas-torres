import React, { useState } from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount';



function Card({id, clase, img, producto, descripcion, stock, itemname}) {

  const [switchToggle2, setswitchToggle2] = useState(false)
  const ToggleSwitch2 = () => {
    switchToggle2 ? setswitchToggle2(false) : setswitchToggle2(true); 
  }


    return (

      // onClick={ToggleSwitch2} className={switchToggle2 ? "cardcont2" : "cardcont"}    
  <div className="cardcont" id={id}>
        <img src={img} className="cardimg" alt={producto} />
        <p className="cardTitulo">{producto}</p>
        <p className="cardDescripcion">{descripcion}</p>

        <ItemCount stock={stock} itemname={itemname}/>
  </div>
    ); }

export default Card;
