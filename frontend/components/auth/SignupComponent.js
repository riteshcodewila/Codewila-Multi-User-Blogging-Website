import React, { useState } from "react";
import { signup } from "../../actions/auth";
import { API } from "../../config"; // make sure path is correct

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, success, loading, message, showForm } = values;
  
  // Handle input changes
  const handleChange = (field) => (e) => {
    setValues({ ...values, error: "", [field]: e.target.value });
  };
  const showLoading = () => loading && <div className="alert alert-info">Loading...</div>;
  const showError = () => error && <div className="alert alert-danger">{error}</div>;
  const showMessage = () => message && <div className="alert alert-success">{message}</div>;
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: "", loading: true });

    const user = { name, email, password };

    signup(user)
      .then((data) => {
        console.log("Signup API response:", data);

        if (data?.error) {
          setValues({
            ...values,
            error: data.error || data.message || "Unknown error occurred",
            success: false,
            loading: false,
          });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
            loading: false,
            message: data?.message || "Signup successful!",
            showForm: false,
          });
        }
      })
      .catch((err) => {
        setValues({
          ...values,
          error: err.message || "Something went wrong. Please try again.",
          success: false,
          loading: false,
        });
      });
  };

  // Signup form JSX
  const signupForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          value={name}
          onChange={handleChange("name")}
          type="text"
          className="form-control mb-3"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <input
          value={email}
          onChange={handleChange("email")}
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group">
        <input
          value={password}
          onChange={handleChange("password")}
          type="password"
          className="form-control mb-3"
          placeholder="Enter your password"
          required
        />
      </div>
      <div>
        <button className="btn btn-primary mb-3 col-md-6 offset-md-3" disabled={loading}>
          {loading ? "Signing up..." : "Signup"}
        </button>
      </div>

      {/* Display error or success messages */}
      {error && <div className="alert alert-danger mt-2">{error}</div>}
      {success && <div className="alert alert-success mt-2">{message}</div>}
    </form>
  );

  return <React.Fragment>
  {showLoading()}
  {showError()}
  {showMessage()}
  {showForm && signupForm()}
  </React.Fragment>
}

export default SignupComponent;
