import { Router } from "express";
import clientAuth from "./auth/client.js";
import clientProfile from './profile/profile.js';

const clientRouter = Router();

clientRouter.use('/auth', clientAuth);
clientRouter.use('/profile', clientProfile);

export default clientRouter;
