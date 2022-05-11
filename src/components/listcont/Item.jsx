import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';



function Item({id, nombre, img, descripcion}) {

  // const [itemdetail, setitemdetail] = useState(false)
  // const toggleitemdetail = () => {
  //   itemdetail ? setitemdetail(false) : setitemdetail(true); }

  


    return (

      // onClick={ToggleSwitch2} className={switchToggle2 ? "cardcont2" : "cardcont"}    
  <a>
  <div className="cardcont" id={id} onClick="" >
        <img src={img}  className="cardimg" alt={nombre} />
        <p className="cardTitulo">{nombre}</p>
        <p className="cardDescripcion">{descripcion}</p>
  </div>
  </a>
    ); }

export default Item;
