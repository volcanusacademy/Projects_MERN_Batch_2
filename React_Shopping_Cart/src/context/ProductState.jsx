import React, { useEffect, useState } from 'react'
import ProdductContext from './ProductContext'
import { data } from '../Data'
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';


const ProductState = (props) => {
    const location = useLocation()
    const [products, setProducts] = useState(data)
    const [cart, setCart] = useState([])
    useEffect(() => {
        if (location.pathname == '/') {
            setProducts(data)
        }

    }, [location.pathname])

    const addToCart = (product) => {
        setCart([...cart, product]);
        toast.success('Item Added Successfully!!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
        // console.log("Cart Item...", cart);

    }
    const relatedProduct = (cat) => setProducts(data.filter((product) => product.category == cat))
    return (
        <>
            <ProdductContext.Provider value={{ products, setProducts, cart, setCart, addToCart, relatedProduct }}>
                {props.children}
            </ProdductContext.Provider>
        </>
    )
}

export default ProductState