import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import Product from "./Product";
const RelatedProduct = ({ cat }) => {
  const { relatedProduct } = useContext(ProductContext);

  useEffect(() => {
    relatedProduct(cat);
  }, [cat]);

  return (
    <div>
      <Product />
    </div>
  );
};

export default RelatedProduct;