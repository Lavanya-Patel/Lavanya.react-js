import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
    <div className='header'>
        <div className='logo'>
         <h2>Logo</h2>
        </div>
        <div className='nav'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='icons'>
        <FaSquareFacebook />
        <FaTwitter />
        <FaInstagram />
        </div>

    </div>
    </div>
  )
}

export default Header
