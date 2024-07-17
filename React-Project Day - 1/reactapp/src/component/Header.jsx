import React from 'react'
import { FaBeer } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

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
        <FaInstagram />
        <FaFacebookF />
        <FaTwitter />

        </div>

      </div>
    </div>
  )
}

export default Header
