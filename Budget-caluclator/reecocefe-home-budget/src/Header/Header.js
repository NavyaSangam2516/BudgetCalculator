import React from 'react';
import './Header.css';
import logo from '../assets/logo.webp'; // Adjust the path based on where the logo file is located

const Header = ({ onCalculateClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Company Logo" className="logo" />
       
      </div>
    </header>
  );
};

export default Header;
