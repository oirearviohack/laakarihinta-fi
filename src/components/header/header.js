import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
    <header className="c-header">
        <Link to="/home" className="c-header__logo">
            <img className="c-header__logo" src={require('../../assets/svg/logo-large.svg')} alt="Logo" role="presentation" />
        </Link>
        <nav role="navigation">
            <div className="c-header__burger" />
            <div className="c-header__nav">
                <Link className="c-header__nav-item" to="/about">About Us</Link>
                <Link className="c-header__nav-item" to="/packages">Packages</Link>
                <Link className="c-header__nav-item" to="/blog">Blog</Link>
                <Link className="c-header__nav-item c-header__nav-item--featured" to="/contact">Enquire</Link>
            </div>
        </nav>
    </header>
);

export default Header;
