import React from 'react'
import { productosElectronicos } from "../data/data"
import { Col, Row } from 'react-bootstrap'
import { CardProductos } from './CardProductos'
import { useState } from "react";
import Form from 'react-bootstrap/Form';


export const Home = () => {
    const [search, setSearch] = useState("");

  return (
    <div>
        <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2 border border-dark"    
                        onChange={(e) => setSearch(e.target.value)}                    
                        />
                    </Col>
                </Row>
            </Form>
            
        <Row xs={1} md={2} lg={4} className='m-3'>
        { productosElectronicos.filter((producto) => {
                 return search.toLowerCase() === "" ? producto : producto.nombreProducto.toLowerCase().includes(search)
                }).map((producto) =>{
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
