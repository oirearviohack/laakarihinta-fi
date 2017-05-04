import React from 'react';


const HomePage = () => (
    <div>
        <div className="c-banner">
            <img
                className="c-banner__image"
                src={require('../../assets/images/placeholder.png')}
                alt="Banner"
                role="presentation"
            />
            <div className="container-fluid c-banner__content">
                <h1 className="u-color-white">Hi, we are wwwonderful.</h1>
                <h2>A collaboration of talented designers and developers</h2>
                <button>Hey</button>
            </div>
        </div>
        <img src={require('../../assets/svg/logo-large.svg')} alt="Logo" role="presentation" />
        <img src={require('../../assets/svg/logo-small.svg')} alt="Logo-Small" role="presentation" />
    </div>
);

export default HomePage;
