import "./NavBar.css";

import img from "./ceramica.png";
import CartWidget from "../CardtWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <img className="logo" src={img} alt="logo-bebidas" />
        <li>Home</li>
        <li>Productos</li>
        <li>Contacto</li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
