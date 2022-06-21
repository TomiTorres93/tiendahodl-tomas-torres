import React, { useState } from 'react';
import './ItemListContainer.css';
import { Link } from 'react-router-dom';


function Item({ id, nombre, imgpro, img, descripcion }) {

  // ESTE ESTADO ES PARA QUE SE MODIFIQUE LA IMAGEN
  // DEL PRODUCTO AL MOMENTO DE HACER EL MOUSEOVER
  const [itemimg, setItemimg] = useState(imgpro)

  return (

    <Link className='link' to={`/detalle/${id}`}>
      <div className="cardcont" id={id} >
        <img src={itemimg} className="cardimg" alt={nombre} onMouseOver={() => setItemimg(img)} onMouseOut={() => setItemimg(imgpro)} />
        <p className="cardTitulo">{nombre}</p>
        <p className="cardDescripcion">{descripcion}</p>
      </div>
    </Link>
  );
}
export default Item;
