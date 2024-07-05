import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../Data';
import RelatedProduct from './RelatedProduct';

const ProductDetail = () => {
  const { id } = useParams();

  const product = data.filter((d)=>d.id == id)
  // console.log(product[0]);
  const cat = product[0].category;
  return (
    <>
    <div className="container text-center my-5">
     <div className='d-flex justify-content-center align-items-center my-5'>

      <img src={product[0].imgSrc} alt="" style={{width:"300px"}}/>
     </div>
     <h3>{product[0].title}</h3>
     <p>{product[0].description}</p>

     <div className="my-3">
      <button className='btn btn-primary mx-3'>{product[0].price}</button>
      <button className='btn btn-warning'>Add to Cart</button>
     </div>
     </div>
     <h1 className='text-center'>Related Products</h1>
     <RelatedProduct cat={cat}/>
    </>
  );
}

export default ProductDetail;
