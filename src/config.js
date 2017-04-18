module.exports = {
    host: process.env.NODE_HOST || 'localhost',
    port: process.env.PORT || '8080',
    nginxPort: '443',
    app: {
        htmlAttributes: { lang: 'en' },
        title: 'React Cool Starter',
        titleTemplate: 'React Cool Starter - %s',
        meta: [
            {
                name: 'description',
                content: 'The best react universal starter boilerplate in the world.'
            }
        ]
    }
};
