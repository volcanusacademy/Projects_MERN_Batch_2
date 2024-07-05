
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import ProductContext from "../context/ProductContext";
const Navbar = () => {
  const { logout, isAuthenticated } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <>
      <div
        className="nav_bar d-flex justify-content-between align-items-center p-2 bg-black"
        style={{
          position: "sticky",
          top: 0,
        }}
      >
        <div className="left"></div>
        <div className="right">
          <Link to={"/"} className="items btn btn-primary mx-3">
            Products
          </Link>
          {isAuthenticated && (
            <>          <Link to={"/addproduct"} className="items btn btn-warning mx-3">
              AddProduct
            </Link>
             <Link to={"/product/user"} className="items btn btn-info mx-3">
              Profile
            </Link>
              <div
                className="items btn btn-danger mx-3"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </div>
            </>
          )}


          {!isAuthenticated && (
            <>
              <Link to={"/login"} className="items btn btn-secondary mx-3">
                Login
              </Link>
              <Link to={"/register"} className="items btn btn-info mx-3">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
