import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Product from './Components/Product'
import SearchProduct from './Components/SearchProduct'
import Cart from './Components/Cart'
import { data } from './Data'
import { Routes, Route } from 'react-router-dom';
import ProductDetail from "./Components/ProductDetail"
import RelatedProduct from './Components/RelatedProduct';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
     
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/:id' element={<ProductDetail />} />
          <Route path='/search/:term' element={<SearchProduct />} />
          {/* <Route path='/:id' element={<RelatedProduct setRelatedProduct={setRelatedProduct} />} /> */}
          <Route path='/cart' element={<Cart />} />
        </Routes>
      
    </>
  );
}

export default App;
