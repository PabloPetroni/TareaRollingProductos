import React from 'react'
import { productosElectronicos } from "../data/data"
import { CardProductos } from './CardProductos'
import { Col, Row } from 'react-bootstrap'

export const Productos = ({categoria}) => {
    
    const mostrarProductos = productosElectronicos.filter(producto => producto.categoria === categoria)
  return (
    <div>
        <Row xs={1} md={2} lg={4} className='m-3'>
        { mostrarProductos.map((producto) =>{
            return(
                <Col key={producto.id}>
                    <CardProductos producto={producto}/>
                </Col>

            )

        }) 


        }
        </Row>
    </div>
  )
}
