import "./ItemListContainer.css"
import React from 'react'
import { useEffect, useState } from 'react'
import { gFetch } from '../../utils/gFetch'

const ItemListContainer = (obj) => {

  const [products, setProducts] = useState([])
  const [bool, setBool] = useState(true)
  

  useEffect(() => {
    gFetch
    .then(resp => setProducts(resp))
    .catch(err => console.log(err))
    .finally(() => console.log("siempre"))},
   [])

  const cambiarEstado = () => {
    setBool(!bool)
  }

  console.log(products)
  return (
    <div> 
      <h1> ItemListContainer </h1>
      <h2>Contenido de lista</h2>
      <button onClick={cambiarEstado}>cambiar estado</button>

      { products.map(obj => 
      <div key={obj.id}>
        <div>
          {obj.name}
        </div>
        <div>
          {obj.Pokemon}
        </div>
        <div>
          {obj.stock}
        </div>
        <div>
          Precio: {obj.precio}
        </div>
        <div>
          <img src={obj.foto} />
        </div>
      </div>)}
    </div>
  )
}

export default ItemListContainer