import React from 'react';
// import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
        <h3>Home</h3>
        <div className='nav-menu'>
            <Link className='navlink' to="/">Home</Link>
            <Link className='navlink' to="/category">Category</Link>
        </div>
    </div>
  )
}

export default Navbar