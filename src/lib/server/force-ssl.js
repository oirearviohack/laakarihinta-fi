const forceSSL = (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https' &&
        process.env.NODE_ENV === 'production' &&
        !req.get('Host').includes('localhost')) {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
};

export default forceSSL;
