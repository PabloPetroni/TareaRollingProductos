import React from 'react'
import { useParams } from "react-router-dom"
import { productosElectronicos } from "../data/data"


export const Detalle = () => {
    const {id} = useParams()
    
    const prod = productosElectronicos.find(p => id === p.id)


  return (
    <div className='d-flex align-items-center m-3'>
    <div style={{flex:1}}>
      <img src={prod.imagen} alt={prod.nombreProducto}/>
    </div>

    <div style={{flex:2}} className='ps-5'>
      <h2>{prod.nombreProducto}</h2>
      <p><strong>Precio:</strong> {prod.precio} </p>
      <p><strong>Categoria:</strong> {prod.categoria} </p>
      <p><strong>Descripcion:</strong> {prod.descripcion} </p>     
    </div>

  </div>
  )
}
