import morgan from 'morgan';
import fs from 'fs';


const accessLogStream = fs.createWriteStream('access.log', { flags: 'a' });
const enableLogging = () => {
    if (__DEV__) {
        return morgan('dev', { skip: (req, res) => res.statusCode < 400 });
    }

    return morgan('combined', { stream: accessLogStream });
};

export default enableLogging;
