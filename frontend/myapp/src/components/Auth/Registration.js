import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "Lister", // Default user type
  });
  // const [error, setError] = useState(null);
  // const [successMessage, setSuccessMessage] = useState(null);

const navigate= useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", formData)
      .then((res) => {
        if(res.data.Status === "Success"){
navigate('/')
        }else{
alert(res.data.Message)
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-4">
            <div className="card-body">
              <h2 className="card-title">Register Here</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* <div className="mb-3">
                  <label className="form-label">User Type:</label>
                  <select
                    name="userType"
                    className="form-control"
                    value={formData.userType}
                    onChange={handleChange}
                  >
                    <option value="Buyer">Buyer</option>
                    <option value="Lister">Lister</option>
                  </select>
                </div> */}
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
              {/* {error && <p>Error: {error}</p>}
              {successMessage && <p>{successMessage}</p>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
