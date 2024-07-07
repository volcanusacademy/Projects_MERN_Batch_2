import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../Data";
import Product from "./Product";

import ProductContext from "../context/ProductContext";

const SearchProduct = () => {
  const { setProducts } = useContext(ProductContext)
  const { term } = useParams();
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    setSearchData(
      data.filter((d) =>
        d.title.toLowerCase().includes(term.toLocaleLowerCase())
      )
    );
    if (searchData.length == 0) {
      setProducts(data);
    }
    console.log(searchData);
  }, [term]);

  return (
    <>
      {searchData.length == 0 ? (
        <>
          <div className="container text-center my-5">
            <h1>No Product found</h1>
            <Link to={"/"} className="btn btn-warning">
              Continue Shopping
            </Link>
          </div>
        </>
      ) : (
        <Product products={searchData} />
      )}
    </>
  );
};

export default SearchProduct;