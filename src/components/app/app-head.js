/* eslint-disable max-len */
import React from 'react';
import Helmet from 'react-helmet';


const AppHead = () => (
    <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Image Analyzer App"
        titleTemplate="Image Analyzer App"
        defaultTitle="Image Analyzer App"
        link={[
            { rel: 'stylesheet', type: 'text/css', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
            { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500' }
        ]}
        meta={[
            { name: 'description', content: 'Coronaria Customer Targeting Tool' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no' }
        ]}
    />
);

export default AppHead;
