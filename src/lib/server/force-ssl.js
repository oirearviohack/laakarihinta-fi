const isUsingHTTPS = ({ headers }) => headers['x-forwarded-proto'] === 'https';
const isLocalhost = host => host.includes('localhost');

const forceSSL = (req, res, next) => {
    if (!isUsingHTTPS(req) && !isLocalhost(req.get('Host')) && !__DEV__) {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }

    return next();
};

export default forceSSL;
