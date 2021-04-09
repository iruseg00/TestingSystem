import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import ExecJWT from './middlewares/ExecJWT.mjs';
import isAuth from './middlewares/isAuth.mjs';
import Auth from './controllers/AuthController.mjs';
import UserController from './controllers/UserController.mjs';
import SusController from './controllers/SusController.mjs';
import MdtController from './controllers/MdtController.mjs';
const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors());
app.use(ExecJWT);
app.get('/', (req, res) => {
	console.log(req.user);
	res.send(req.user);
});

app.use('/api/auth', Auth);
app.use('/api/users', isAuth, UserController);
app.use('/api/sus', isAuth, SusController);
app.use('/api/mdt', isAuth, MdtController);

export default app;
