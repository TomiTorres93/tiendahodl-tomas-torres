
import './Navbar.css';
import carritopng from './img/carrito.png';
import { Link } from 'react-router-dom';



function Carrito() {
    return (
<>
  <Link to='/cart'>
  <img src={carritopng} className="logoCarrito" alt="carrito de compras" />
  </Link>
  
</>

    ); }


export default Carrito;
