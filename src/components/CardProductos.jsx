import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom"



export const CardProductos = ({producto}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }} className='mb-3 d-flex align-items-center'>
				<Card.Img
					variant='top'
					src={`${producto.imagen}`}
					className=''
				/>
				<Card.Body>
					<Card.Title>{producto.nombreProducto}</Card.Title>
					<Link to={`/producto/${producto.id}`}> 
						Ver mas{' '}
					</Link>
				</Card.Body>
			</Card>
    </div>
  )
}
