import HttpStatus from 'http-status-codes';


export const logErrors = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
};

export const clientErrorHandler = (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Unauthorized to access this endpoint!' });
    } else {
        next(err);
    }
};

export const catchAllErrorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR); // TODO: Render something awesome when our server fails :D
};
