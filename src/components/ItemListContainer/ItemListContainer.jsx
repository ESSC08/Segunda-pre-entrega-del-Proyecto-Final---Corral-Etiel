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
      <button onClick={cambiarEstado}>cambiar estado</button>
    </div>
  )
}

export default ItemListContainer