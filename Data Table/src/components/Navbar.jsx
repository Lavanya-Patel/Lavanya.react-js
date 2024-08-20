import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    fontFamily:"coromorent",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4a90e2', // Light blue background
    padding: '15px 30px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const linkStyle = {
    color: 'white', // White text color
    textDecoration: 'none', // Remove underline
    padding: '10px 15px',
    borderRadius: '5px', // Rounded corners
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };

  const hoverStyle = {
    backgroundColor: '#357ab8', // Darker blue on hover
    transform: 'scale(1.05)', // Slightly enlarge on hover
  };

  return (
    <div style={navbarStyle}>
      <Link to="/" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>
        Home
      </Link>
      <Link to="/login" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>
        Login
      </Link>
      <Link to="/product" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>
        Product
      </Link>
      <Link to="/add" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>
        Add Product
      </Link>
    </div>
  );
}

export default Navbar;