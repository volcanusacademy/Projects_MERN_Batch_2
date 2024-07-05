import { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    qty: "",
    imgsrc: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const { title, description, price, qty, imgsrc, category } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      formData.category == "--Select Product Category--" ||
      formData.category.length == 0
    ) {
      alert("Please choose category...");
    } else {
      console.log("formData", formData);
      const res = await addProduct(
        title,
        description,
        price,
        qty,
        imgsrc,
        category
      );
      alert(res.message);
      if (res.success) {
        navigate("/");
      }
    }
  };
  return (
    <>
      <div
        className="container mx-auto my-3 p-5 bg-black text-light"
        style={{
          width: "600px",
          border: "1px solid yellow",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              value={formData.title}
              name="title"
              onChange={handleChange}
              type="text"
              className="form-control bg-black text-light"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              value={formData.description}
              name="description"
              onChange={handleChange}
              type="text"
              className="form-control bg-black text-light"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              value={formData.category}
              name="category"
              onChange={handleChange}
              className="form-select bg-black text-light"
              aria-label="Default select example"
              required
            >
              <option selected>--Select Product Category--</option>
              <option value="mobiles">Mobiles</option>
              <option value="tablets">Tablets</option>
              <option value="laptops">Laptops</option>
              <option value="headPhones">HeadPhones</option>
              <option value="cameras">Cameras</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              value={formData.price}
              name="price"
              onChange={handleChange}
              type="text"
              className="form-control bg-black text-light"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              value={formData.qty}
              name="qty"
              onChange={handleChange}
              type="text"
              className="form-control bg-black text-light"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">ImgSrc</label>
            <input
              value={formData.imgsrc}
              name="imgsrc"
              onChange={handleChange}
              type="text"
              className="form-control bg-black text-light"
              required
            />
          </div>

          <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;