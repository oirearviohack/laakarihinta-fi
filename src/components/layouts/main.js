import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Pages from '../../pages';


const Main = () => (
    <div className="o-main-layout">
        <Navbar />
        <Pages />
        <Footer />
    </div>
);

export default Main;
