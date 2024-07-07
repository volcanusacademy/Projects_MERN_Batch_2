import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import { data } from "../Data";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

const ProductState = (props) => {
  const location = useLocation();
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (location.pathname == "/") {
      setProducts(data);
    }
  }, [location.pathname]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Item added Successfully...!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const relatedProduct = (cat) =>
    setProducts(data.filter((product) => product.category == cat));

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        addToCart,
        relatedProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;