import { Router } from "express";
import UserAuthController from "../../../controllers/authController.js";

const adminAuth = Router();

adminAuth.post('/register', UserAuthController.register);
adminAuth.post('/login', UserAuthController.loginUser);
adminAuth.post('/logout/:uid', UserAuthController.logoutUser);
// adminAuth.post('/resetPassword', UserAuthController.resetPassword);

export default adminAuth;
