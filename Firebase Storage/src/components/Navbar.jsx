import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    fontFamily:"coromorent",
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '15px 30px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const linkStyle = {
    color: 'black', 
    textDecoration: 'none', 
    padding: '10px 15px',
    marginLeft:"35px",
    fontsize:"10px",
    paddingLeft:"20px",
  
  };

  
  return (
    <div style={navbarStyle}>
      <Link to="/home" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>
        Home
      </Link>
      <Link to="/Login" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>
        Login
      </Link>
      <Link to="/Product" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>
        Product
      </Link>
      <Link to="/Addproduct" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>
        Add Product
      </Link>
    </div>
  );
}

export default Navbar;