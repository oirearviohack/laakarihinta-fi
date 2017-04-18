import React from 'react';
import Helmet from 'react-helmet';


const AppHead = () => (
    <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Wwwonderful"
        titleTemplate="Wwwonderful"
        defaultTitle="Wwwonderful"
        link={[
            { rel: 'manifest', href: '/manifest.json' },
            { rel: 'theme-color', content: '#ffffff' },
            { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffffff' },
            { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
            { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
            { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '60x60' }
        ]}
        meta={[
            { name: 'description', content: 'Coronaria Customer Targeting Tool' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no' }
        ]}
    />
);

export default AppHead;
