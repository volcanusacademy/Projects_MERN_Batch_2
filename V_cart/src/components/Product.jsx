import React from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";

const Product = () => {
  const {products,addToCart}=useContext(ProductContext)
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center">
        {products.map((data) => (
          <div
            key={data.id}
            className="col-md-4 d-flex justify-content-center align-items-center"
            style={{ textDecoration: "none" }}
          >
            <div
              className="card bg-dark text-light text-center my-3"
              style={{ width: "18rem" }}
            >
              <Link
                to={`/${data.id}`}
                className="d-flex justify-content-center align-items-center p-3"
              >
                <img
                  src={data.imgSrc}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "200px",
                  }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <button className="btn btn-primary mx-3">
                  {data.price}
                </button>
                <button className="btn btn-warning" onClick={()=>addToCart(data)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
