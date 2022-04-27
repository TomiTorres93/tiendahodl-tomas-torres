
import './Navbar.css';
import logohodl from './logohodl.png';



function Navbar() {
    return (
<nav>
<img src={logohodl} className="logoIcon" alt="logohodl" />
  <ul className="menu-cont">
    <a className="menu-item borde1" href="">HOME</a>
    <a className="menu-item borde2" href="">PRODUCTOS</a>
    <a className="menu-item borde3" href="">CÓMO LLEGAR</a>
    <a className="menu-item borde4" href="">SOBRE NOSOTROS</a>
    <a className="menu-item borde5" href="">CONTACTO</a>
  </ul>
</nav>

    ); }


export default Navbar;
