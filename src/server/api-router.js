import express from 'express';
import bodyParser from 'body-parser';
import HttpStatus from 'http-status-codes';
import ImageController from './controllers/image-controller';


const apiRouter = express.Router(); // eslint-disable-line
apiRouter.use(bodyParser.json({ type: 'application/json' }));

new ImageController(apiRouter);

apiRouter.get('*', (req, res) => res.sendStatus(HttpStatus.NOT_FOUND));
apiRouter.use((err, req, res, next) => next(err));

export default apiRouter;
