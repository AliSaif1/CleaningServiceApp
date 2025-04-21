import { Router } from "express";
import adminAuth from "./auth/adminAuth.js";
import serviceRoute from './services/serviceRoute.js';

const adminRouter = Router();

adminRouter.use('/auth', adminAuth);
adminRouter.use('/services', serviceRoute);

export default adminRouter;
