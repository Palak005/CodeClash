import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">CodeClash</div>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className="profile-container">
        <div className="profile-icon"></div>
      </div>
    </div>
  );
};

export default Navbar;
