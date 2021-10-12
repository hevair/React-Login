import express from 'express'
import {Login} from './controllers/LoginControllers.js'
const routes = express();

routes.post('/login',Login.loginController)
 
export {routes}