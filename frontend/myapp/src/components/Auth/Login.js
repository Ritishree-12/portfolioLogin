import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "Lister", // Default user type
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      // Frontend validation (e.g., email format, password strength)
      // Implement your validation logic here

      // Make an API POST request to the server
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      // Registration successful
      setSuccessMessage("Registration successful!");
      setError(null);
    } catch (error) {
      setError(error.message);
      setSuccessMessage(null);
    }
    console.log(formData);
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
                <div className="mb-3">
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
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
              {error && <p>Error: {error}</p>}
              {successMessage && <p>{successMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
