import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logohodl from './img/logohodl.png';
import Carrito from './CartWidget';


function Navbar() {

  const [menuMobileIcono, setMenuMobileIcono] = useState(false)
  const [menuMobileItems, setMenuMobileItems] = useState(false)

  const menuMobile = () => {

    if (menuMobileIcono === false) {
    setMenuMobileIcono(true)
    setMenuMobileItems(true)
  } else {
    setMenuMobileIcono(false)
    setMenuMobileItems(false)
  }  }


  return (
    <nav>
      <Link className='link' to={`/`}>
      <img src={logohodl} className="logoIcon" alt="Logo de la marca" />
      </Link>

    <div onClick={menuMobile}>
      {menuMobileIcono === false ? <button  class="menumobilebutton none-desktop"  type="text"> ≡ </button> : <button  class="menumobilebuttonClick none-desktop"  type="text"> ✖ </button>}


    </div>
      <ul className={menuMobileItems === false ? "menu-cont menumobile" : "menu-cont"}>

        <Link className='link menu-itemmob' to={`/`} onClick={menuMobile}>
          <a className="menu-item borde1" href="">HOME</a>
        </Link>

        <Link className='link menu-itemmob' to={`/mi-orden`} onClick={menuMobile}>
          <a className="menu-item borde5" href="">SEGUIMIENTO </a>
        </Link>

        <Link className='link menu-itemmob' to={`/nosotrxs`} onClick={menuMobile}>
          <a className="menu-item borde3" href="">NOSOTRXS</a>
        </Link>

        <Link className='link menu-itemmob' to={`/contacto`} onClick={menuMobile}>
          <a className="menu-item borde4" href="">CONTACTO</a>
        </Link>

        <Link className='link menu-itemmob' to={`/panel`} onClick={menuMobile}>
          <a className="menu-item borde4" href="">ADMIN</a>
        </Link>

      </ul>
      <Link className='link' to={`/cart`}>  
      <Carrito /></Link>

    </nav>
  );
}


export default Navbar;
