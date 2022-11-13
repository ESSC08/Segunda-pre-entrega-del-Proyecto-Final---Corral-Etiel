import "./NavBar.css";
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div>
        <h2>Contenido de lista</h2>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <li>Acerca de</li>
        <CartWidget/>
    </div>
  )
}

export default NavBar