import React from "react";

const  Footer = () => {
    return(
        <footer>
            <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h4>Export24</h4>
          <p>Your trusted export partner.</p>
        </div>


        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#products">Products</a></li>
            <li><a href="#enquiry">Enquiry</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Export24. All rights reserved.</p>
      </div>
        </footer>
    )
}


export default Footer;
