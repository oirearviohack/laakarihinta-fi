import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';


class Header extends Component {

    constructor() {
        super();
        this.state = {
            isMounted: false
        };
        this.setHeaderRef = ::this.setHeaderRef;
        this.setBodyPadding = ::this.setBodyPadding;
    }

    componentDidMount() {
        window.addEventListener('resize', this.setBodyPadding);
        this.setBodyPadding();
        this.setState({ isMounted: true }); // eslint-disable-line react/no-did-mount-set-state
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setBodyPadding);
    }

    setBodyPadding() {
        document.body.style.paddingTop = `${this.header.clientHeight}px`;
    }

    setHeaderRef(el) {
        this.header = el;
    }

    render() {
        const headerClass = classNames({
            'c-header': true,
            'is-mounted': this.state.isMounted
        });

        return (
            <header className={headerClass} ref={this.setHeaderRef}>
                <Link to="/home" className="c-header__logo">
                    <img
                        className="c-header__logo"
                        src={require('../../assets/svg/logo-large.svg')}
                        alt="Logo"
                        role="presentation"
                    />
                </Link>
                <nav role="navigation">
                    <div className="c-header__burger">
                        <i className="fa fa-bars" aria-hidden="true" />
                    </div>
                    <div className="c-header__nav">
                        <Link className="c-header__nav-item" to="/about">About Us</Link>
                        <Link className="c-header__nav-item" to="/packages">Packages</Link>
                        <Link className="c-header__nav-item" to="/blog">Blog</Link>
                        <Link className="c-header__nav-item c-header__nav-item--featured" to="/contact">Enquire</Link>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
