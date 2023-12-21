import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarraNav from '../components/BarraNav';
import { Productos } from '../components/Productos';
import { Login } from '../components/Login';
import { Home } from '../components/Home';
import { Detalle } from "../components/Detalle";



export const AppRouter = () => {
  return (
    <BrowserRouter>
        <BarraNav/>
        <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/celulares" element={<Productos categoria="Celulares"/>}/>
                <Route path="/cocina" element={<Productos categoria="Cocina"/>}/>
                <Route path="/belleza" element={<Productos categoria="Belleza"/>}/>
                <Route path="/gaming" element={<Productos categoria="Gaming"/>}/>
                <Route path="/producto/:id" element={<Detalle/>}/>
                

        </Routes>
    </BrowserRouter>
  )
}
