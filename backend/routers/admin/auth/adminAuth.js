import { Router } from "express";
import AdminAuthController from "../../../controllers/authController.js";

const adminAuth = Router();

adminAuth.post('/register', AdminAuthController.registerAdmin);
adminAuth.post('/login', AdminAuthController.loginAdmin);
adminAuth.post('/logout/:uid', AdminAuthController.logoutAdmin);
// adminAuth.post('/resetPassword', AdminAuthController.resetPassword);

export default adminAuth;
