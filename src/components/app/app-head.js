import React from 'react';
import Helmet from 'react-helmet';


const AppHead = () => (
    <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Wwwonderful"
        titleTemplate="Wwwonderful"
        defaultTitle="Wwwonderful"
        link={[]}
        meta={[
            { name: 'description', content: 'Coronaria Customer Targeting Tool' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no' }
        ]}
    />
);

export default AppHead;
