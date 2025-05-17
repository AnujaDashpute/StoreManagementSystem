import React, { useState } from 'react';
import './Signup.css';
import '../../assets/css/soft-ui-dashboard.css';
import '../../assets/css/soft-ui-dashboard.min.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    role: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format.';
    if (!formData.password) newErrors.password = 'Password is required.';
    else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters, include 1 number and 1 uppercase letter.';
    }
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password.';
    else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.role) newErrors.role = 'Please select a role.';

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
      console.log('Form submitted:', formData);
      // Submit logic here
    }
  };

  return (
    <div className="signup-wrapper">
      <main className="main-content mt-0">
        <div className="page-header align-items-center min-vh-100 d-flex flex-column justify-content-center signup-bg">

          <div className="container text-center text-white signup-heading">
            <h1 className="display-5 fw-bold">Welcome!</h1>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="card shadow-lg border-0 animated-card">
                  <div className="card-header text-center pt-4">
                    <h5 className="fw-bold">Register</h5>
                  </div>
                  <div className="card-body p-4">
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="mb-3">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control input-hover"
                          placeholder="Name"
                          required
                        />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                      </div>
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
                      <div className="mb-3">
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="form-control input-hover"
                          placeholder="Confirm Password"
                          required
                        />
                        {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="form-control input-hover"
                          placeholder="City"
                          required
                        />
                        {errors.city && <small className="text-danger">{errors.city}</small>}
                      </div>
                      <div className="mb-3">
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="form-select form-control input-hover"
                          required
                        >
                          <option value="">Select Role</option>
                          <option value="user">Customer</option>
                          <option value="store-owner">Store Owner</option>
                          <option value="admin">Admin</option>
                        </select>
                        {errors.role && <small className="text-danger">{errors.role}</small>}
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-dark w-100 my-3 shadow-sm">
                          Sign up
                        </button>
                      </div>
                    </form>
                    <p className="text-sm text-center mt-2 text-dark">
                      Already have an account?{" "}
                      <a href="/login" className="fw-bold text-primary">Sign in</a>
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

export default SignupPage;
