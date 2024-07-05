import React, { useContext, useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { data } from '../Data';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProductContext from '../context/ProductContext';


const Navbar = () => {
  const {setProducts, cart} = useContext(ProductContext)

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const location = useLocation();
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (searchTerm != "") {
      navigate(`/search/${searchTerm}`)
    }
    else {
      alert("Please Enter Something")
    }
    setSearchTerm("")
    console.log(searchTerm);
  };

  const filterByCategory = (cat) => setProducts(data.filter((d) => d.category === cat))

  const filterByPrice = (price) => setProducts(data.filter((d) => d.price >= price))



  return (
    <>
      <div className="Nav sticky-top">
        <div className="nav">
          <Link to={'/'} className="brand">
            <h2>Shopping.Cart</h2>
          </Link>
          <form className="search" onSubmit={SubmitHandler}>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search here...' />
          </form>
          <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <FaCartPlus style={{ fontSize: "2rem" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>

          </Link>
        </div>
        {location.pathname == '/' &&
          <div className="sub_bar d-flex justify-content-around align-items-center">
            <div className="items">Filter by-{">"}</div>
            <div className="items" onClick={() => setProducts(data)}>No Filter</div>
            <div className="items" onClick={() => filterByCategory("mobiles")}>Mobiles</div>
            <div className="items" onClick={() => filterByCategory("laptops")}>Laptops</div>
            <div className="items" onClick={() => filterByCategory("tablets")}>Tablets</div>
            <div className="items" onClick={() => filterByPrice(29999)}>{">="}29999</div>
            <div className="items" onClick={() => filterByPrice(49999)}>{">="}49999</div>
            <div className="items" onClick={() => filterByPrice(69999)}>{">="}69999</div>
            <div className="items" onClick={() => filterByPrice(89999)}>{">="}89999</div>
          </div>}

      </div>

    </>
  );
}

export default Navbar;
