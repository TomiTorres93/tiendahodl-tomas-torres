import React, { useState } from 'react';
import './Productos.css';



function Producto({img, producto, id, imgid, precio}) {

const [switchToggle, setswitchToggle] = useState(false)
const ToggleSwitch = () => {
  
switchToggle ? setswitchToggle(false) : setswitchToggle(true);

}


    return (


  <div  className={switchToggle ? "cardprocont2" : "cardprocont"} id={id}>
        <img src={img} className={switchToggle ? "cardproimgglow" : "cardproimg"} alt={producto} imgid={imgid} onClick={ToggleSwitch}/>
        <p className="cardPrecio">${precio}</p>
  </div>


    ); }


export default Producto;



