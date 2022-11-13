import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from "../pages/Product"
export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Login" element={<Login></Login>}></Route>
                <Route path="/Product" element={<Product></Product>}></Route>
                <Route path="" element></Route>
                <Route path="" element></Route>
                <Route path="" element></Route>
                <Route path="" element></Route>
            </Routes>
        </div>
    )
}
