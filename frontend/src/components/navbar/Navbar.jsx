import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { post, get } from '../../../services/apiEndPoint';
import toast from 'react-hot-toast';

const Navbar = () => {
    let [isLoggedIn, setLoggedIn] = useState(true);

    useEffect(()=>{
        try{
            const fetchApi = async()=>{
                const req = await get("/auth/isAuthenticated");
                const response = req.data;
                console.log(response);
                setLoggedIn(response.success);
            }

            fetchApi();
        } catch(err){
            console.log(err);
        }
    }, [])

    const handleLogout = async()=>{
        setLoggedIn(false);
        try{
            const request = await post("/auth/logout");
            const response = request.data;
            console.log(response);

            if(response.success){
                toast.success(response.message);
            }
            else{
                toast.error(response.message);
            }

        } catch(error){
            console.log(error);
        }
    }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Letsnote</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/note/create">Create Note</Link>
        </li>
        <li>
          <Link to="/">Show Notes</Link>
        </li>
        <li>
          <Link to="/user/profile">Your Profile</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
