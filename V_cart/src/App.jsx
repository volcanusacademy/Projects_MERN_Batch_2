
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import SearchProduct from "./components/SearchProduct";
import Test from "./components/Test";
import Cart from "./components/Cart";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  
  return (
    <>
      
        <ToastContainer />
        <Navbar  />
        <Routes>
          <Route
            path="/"
            element={<Product />}
          />
          <Route path="/:id" element={<ProductDetail />} />
          <Route
            path="/search/:term"
            element={<SearchProduct />}/>
          <Route path="/test" element={<Test/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </>
  );
};
export default App;
