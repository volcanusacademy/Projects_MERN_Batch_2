import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const Cart = () => {
  const {cart}= useContext(ProductContext);
  return (
    <div>
      {cart.map((d)=>
      <div key={d.id} >
         <div className="container text-center my-5">
          <div className="d-flex justify-content-center align-items-center">
            <img src={d.imgSrc} alt="" style={{width:'250px',height:'250px',borderRadius:'10px'}} />
          </div>
          <h1>{d.title}</h1>
          <button className='btn btn-primary mx-3'>{d.price}</button>
          <button className='btn btn-warning'>Buy Now</button>
         </div>
      </div>)}
    </div>
  )
}

export default Cart