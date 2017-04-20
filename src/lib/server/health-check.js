import express from 'express';
import HttpStatus from 'http-status-codes';


const healthCheckRouter = express.Router();
healthCheckRouter.get('/health-check', (req, res) => res.sendStatus(HttpStatus.OK));

export default healthCheckRouter;
