import React, { useState } from 'react';
import './ItemListContainer.css';



function Card({id, clase, img, producto, descripcion, precio}) {

  const [switchToggle2, setswitchToggle2] = useState(false)
  const ToggleSwitch2 = () => {
    
  switchToggle2 ? setswitchToggle2(false) : setswitchToggle2(true);
  
  }
    return (

  <div onClick={ToggleSwitch2} className={switchToggle2 ? "cardcont2" : "cardcont"}  id={id}>
        <img src={img} className="cardimg" alt={producto} />
        <p className="cardTitulo">{producto}</p>
        <p className="cardDescripcion">{descripcion}</p>
        {/* <p className="cardPrecio">{precio}</p>  */}
  </div>
    ); }

export default Card;
