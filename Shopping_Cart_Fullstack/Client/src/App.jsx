import React, { useContext } from 'react'
import Product from './Components/Product'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AddProduct from './Pages/AddProduct'
import Product_Detail from './Pages/Product_Detail'
import UserProduct from './Pages/UserProduct'


const App = () => { 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Product/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/addproduct' element={<AddProduct/>}/>
    <Route path='/product/:id' element={<Product_Detail/>}/>
    <Route path='/product/user' element={<UserProduct/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App