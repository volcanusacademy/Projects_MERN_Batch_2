import React, { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';
import Product from './Product';
// import { data } from '../Data';

const RelatedProduct = ({ cat }) => {
  const { relatedProduct } = useContext(ProductContext)
  // const [product, setProduct] = useState([])
  useEffect(() => {
    relatedProduct(cat)
    
  }, [cat])
  

  return (
    <>
      <Product/>
    </>
  );
}

export default RelatedProduct;
