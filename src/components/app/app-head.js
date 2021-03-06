/* eslint-disable max-len */
import React from 'react';
import Helmet from 'react-helmet';


const AppHead = () => (
    <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="VisuDg"
        titleTemplate="VisuDg"
        defaultTitle="VisuDg"
        link={[
            { rel: 'stylesheet', type: 'text/css', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
            { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500' }
        ]}
        meta={[
            { name: 'description', content: 'Visu Dg' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no' }
        ]}
    />
);

export default AppHead;
