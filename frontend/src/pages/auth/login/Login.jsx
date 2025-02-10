import React, { useState } from "react";
import "./Login.css";
import { post } from "../../../../services/apiEndPoint";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (event)=>{
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async(event)=>{
    event.preventDefault();

    try{
      console.log(value);
      const request = await post("/auth/login", value);
      const response = request.data;

      if(response.success){
        toast.success(response.message);
        navigate('/');
      }
      else{
        toast.error(response.message);
      }

      setValue({
        email: "",
        password: ""
      });

    } catch(error){
      console.log(error);
    }
  };

  return (
    <div className="main">
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={value.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={value.password}
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="signup-redirect">
            Don’t have an account?
            <span>
              <Link to="/signup" className="signup-redirect-link">Signup</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
