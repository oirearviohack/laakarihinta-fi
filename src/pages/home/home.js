import React from 'react';


const HomePage = () => (
    <div>
        <img
            className="c-banner"
            src={require('../../assets/images/placeholder.png')}
            alt="Banner"
            role="presentation"
        />
        <img src={require('../../assets/svg/logo-large.svg')} alt="Logo" role="presentation" />
        <img src={require('../../assets/svg/logo-small.svg')} alt="Logo-Small" role="presentation" />
    </div>
);

export default HomePage;
