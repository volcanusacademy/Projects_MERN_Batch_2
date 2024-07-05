import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

const ProductState = (props) => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const [token, setToken] = useState("");
  const [userProduct, setUserProduct] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const url = "http://localhost:1000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/get`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      // console.log("Fetching Data ", api.data.product);
      console.log("Fetching Data ", api.data.product);
      setProducts(api.data.product);
    };
    fetchProduct();
    getUserProduct()
  }, [reload, token]);

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token")
    // console.log(tokenFromLocalStorage)
    if(tokenFromLocalStorage){
      setToken(tokenFromLocalStorage)
      setIsAuthenticated(true)
    }
    
  }, [token])
  
  // console.log(isAuthenticated)

  // add Product
  const addProduct = async (
    title,
    description,
    price,
    qty,
    imgsrc,
    category
  ) => {
    const api = await axios.post(
      `${url}/product/add`,
      {
        title,
        description,
        price,
        qty,
        imgsrc,
        category,
      },
      {
        headers: {
          "Content-Type": "Application/json",
          "Auth":token
        },
        withCredentials: true,
      }
    );
    setReload(!reload);
    return api.data;
    // console.log(api)
  };

  // register User
  const register = async (name, email, password) => {
    const api = await axios.post(
      `${url}/user/register`,
      { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",

        },
      }
    );

    return api.data;
  };

  // login User
  const login = async (email, password) => {
    const api = await axios.post(
      `${url}/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
         
        },
      }
    );
    // console.log(api.data)
    setToken(api.data.token);
    console.log(api.data.token);
    localStorage.setItem("token", api.data.token);
    setIsAuthenticated(true);
    return api.data;
  };


  // logout 
  const logout = () =>{
    localStorage.removeItem("token");
    setToken("")
    setIsAuthenticated(false)
  }

  //get user product
  const getUserProduct = async () =>{
    const api = await axios.get(`${url}/product/user`,{
      headers: {
          "Content-Type": "application/json",
          "Auth":token
        },
    });
    console.log("Getting User specific Product", api.data.product, token);
    setUserProduct(api.data.product)
  }
 
  return (
    <ProductContext.Provider
      value={{
        userProduct,
        products,
        addProduct,
        url,
        register,
        login,
        logout,
        isAuthenticated, 
        setIsAuthenticated
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;