import { Router } from "express";
import adminAuth from "./auth/adminAuth.js";

const adminRouter = Router();

adminRouter.use('/auth', adminAuth);

export default adminRouter;
