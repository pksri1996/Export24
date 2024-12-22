import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#products" className="navbar-logo">ExportCo</a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#products" className="navbar-link">Products</a>
          </li>
          <li className="navbar-item">
            <a href="#enquiry" className="navbar-link">Enquiry</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;