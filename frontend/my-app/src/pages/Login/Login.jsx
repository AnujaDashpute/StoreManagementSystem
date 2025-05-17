import React, { useState } from 'react';
import './Login.css'; 
import '../../assets/css/soft-ui-dashboard.css';
import '../../assets/css/soft-ui-dashboard.min.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format.';
    if (!formData.password) newErrors.password = 'Password is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Login submitted:', formData);
      // Login API call here
    }
  };

  return (
    <div className="signup-wrapper">
      <main className="main-content mt-0">
        <div className="page-header align-items-center min-vh-100 d-flex flex-column justify-content-center signup-bg">

          <div className="container text-center text-white signup-heading">
            <h1 className="display-5 fw-bold">Welcome Back!</h1>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="card shadow-lg border-0 animated-card">
                  <div className="card-header text-center pt-4">
                    <h5 className="fw-bold">Login</h5>
                  </div>
                  <div className="card-body p-4">
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="mb-3">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control input-hover"
                          placeholder="Email"
                          required
                        />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="form-control input-hover"
                          placeholder="Password"
                          required
                        />
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                      </div>

                      <div className="text-end mb-3">
                        <a href="#" className="text-sm text-primary">Forgot password?</a>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-dark w-100 my-3 shadow-sm">
                          Log in
                        </button>
                      </div>
                    </form>
                    <p className="text-sm text-center mt-2 text-dark">
                      Don’t have an account?{" "}
                      <a href="/signup" className="fw-bold text-primary">Sign up</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default LoginPage;
