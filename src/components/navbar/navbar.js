import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
    <nav role="navigation" className="c-navbar">
        <Link to="/home">Homepage</Link>
        <Link to="/about">About Us</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
    </nav>
);

export default Navbar;
