import React, { useState } from "react";
import toast from "react-hot-toast";
import "./Signup.css";
import { get, post } from "../../../../services/apiEndPoint.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [value, setValue] = useState({
    username: "",
    email : "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (event)=>{
    setValue({
      ...value,
      [event.target.name]:event.target.value
    });
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    try{
      const request = await post('/auth/signup', value);
      const response = request.data;

      if(response.success){
        toast.success(response.message);
        navigate("/");
      }
      else{
        toast.error(response.message);
      }

      setValue({
        username: "",
        email: "",
        password: ""
      });
    } catch(error){
      console.log(error);
    }
  };

  return (
    <div className="main">
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={value.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={value.email}
              onChange={handleChange}
              placeholder="Enter your email"
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
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />  
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
          <p className="login-redirect">
            Already have an account?
            <span>
            <Link to="/login" className="login-redirect-link">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;