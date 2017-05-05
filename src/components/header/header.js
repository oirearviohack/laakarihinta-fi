import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component { // eslint-disable-line

    render() {
        return (
            <header className="c-header">
                <Link to="/home" className="c-header__logo">
                    Logo
                </Link>
                <nav role="navigation">
                    <div className="c-header__burger">
                        <i className="fa fa-bars" aria-hidden="true" />
                    </div>
                    <div className="c-header__nav">
                        <Link className="c-header__nav-item" to="/home">Hei</Link>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
