import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import ProductSlider from './ProductSlider'
import { Link } from 'react-router-dom'

const Product = () => {
    const { products } = useContext(ProductContext)

    return (
        <>
            <ProductSlider />
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-center">
                    {products?.map((data) => (<div key={data._id} className='col-md-4 my-3 p-2'
                    // style={{ border: "1px solid white" }}
                    >
                        <Link to={`/product/${data._id}`}>
                            <img src={data.imgsrc} alt="" style={{ width: "250px", height: "280px", borderRadius: "10px", border: "2px solid yellow" }} />
                        </Link>
                        <h1 className='mt-3'>{data.title}</h1>


                    </div>))}
                </div>
            </div>
        </>
    )
}

export default Product