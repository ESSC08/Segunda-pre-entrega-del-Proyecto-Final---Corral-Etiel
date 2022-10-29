import React from 'react'
import carrito from "../assets/img/carrito.png"


const CartWidget = () => {
  return (
    <div>
      <img src={carrito} class="imagen"></img>
      Carrito de compras
    </div>
  )
}

export default CartWidget
