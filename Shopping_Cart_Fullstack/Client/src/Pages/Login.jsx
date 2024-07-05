import { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const {email, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("User Register", formData);
    const res = await login(email, password);
    alert(res.message);
    if (res.success) {
      navigate("/");
    }
  };
  return (
    <>
      <div
        className="container mx-auto p-5 bg-black text-light"
        style={{
          width: "600px",
          border: "1px solid yellow",
          borderRadius: "10px",
          marginTop: "5rem",
        }}
      >
        <form onSubmit={submitHandler}>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              value={formData.email}
              name="email"
              onChange={handleChange}
              type="email"
              className="form-control bg-black text-light"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={formData.password}
              name="password"
              onChange={handleChange}
              type="password"
              className="form-control bg-black text-light"
              required
            />
          </div>

          <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-primary">
             Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;