const forceSSL = (req, res, next) => {
    if (!req.secure) {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
};

export default forceSSL;

