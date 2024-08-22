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
    border:"1px solid black",
    borderRadius: '5px', 
    transition: 'background-color 0.3s ease, transform 0.2s ease',
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
      
    </div>
  );
}

export default Navbar;