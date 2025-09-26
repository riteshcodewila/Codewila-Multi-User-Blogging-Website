import React, { useState } from "react";
import { signin ,authenticate, isAuth} from "../../actions/auth";
import { useRouter } from "next/router"; // ✅ correct import

const SigninComponent = () => {
  const router = useRouter(); // ✅ initialize router

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
    loading: false,
    message: "",
    showForm: true,
  });

  const { email, password, error, success, loading, message, showForm } = values;

  // Handle input changes
  const handleChange = (field) => (e) => {
    setValues({ ...values, error: "", [field]: e.target.value });
  };

  const showLoading = () =>
    loading && <div className="alert alert-info">Loading...</div>;
  const showError = () =>
    error && <div className="alert alert-danger">{error}</div>;
  const showMessage = () =>
    message && <div className="alert alert-success">{message}</div>;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: "", loading: true });

    const user = { email, password };

    signin(user)
      .then((data) => {
        console.log("Signin API response:", data);

        if (data?.error) {
          setValues({
            ...values,
            error: data.error || data.message || "Unknown error occurred",
            success: false,
            loading: false,
          });
        } else {
          // TODO: save user token to cookies/localStorage if needed
          // TODO: save user info to localStorage if needed

          // authenticate user
          authenticate(data, () => {
            //  router.push("/");
             if(isAuth() && isAuth().role===1){
              router.push('/admin');
             }else{
              router.push('/user');
             }
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

  // Signin form JSX
  const signinForm = () => (
    <form onSubmit={handleSubmit}>
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
        <button
          className="btn btn-primary mb-3 col-md-6 offset-md-3"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Signin"}
        </button>
      </div>
    </form>
  );

  return (
    <React.Fragment>
      {showLoading()}
      {showError()}
      {showMessage()}
      {showForm && signinForm()}
    </React.Fragment>
  );
};

export default SigninComponent;