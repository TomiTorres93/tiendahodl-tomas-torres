import React, { useState } from 'react';
import './Productos.css';


function Producto({tipo, precio, img, id, stockchange ,stock}) {

const [switchToggle, setswitchToggle] = useState(false)
const ToggleSwitch = () => {
  
switchToggle ? setswitchToggle(false) : setswitchToggle(true);

}


    return (


  <div  className={switchToggle ? "cardprocont2" : "cardprocont"} id={id}>

        <img src={img} className={switchToggle ? "cardproimgglow" : "cardproimg"} alt={tipo} onClick={stockchange}  />
        <p className="cardPrecio">${precio}</p>

  </div>


    ); }


export default Producto;



