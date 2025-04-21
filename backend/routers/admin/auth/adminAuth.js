import { Router } from "express";
import AdminAuthController from "../../../controllers/authController.js";

const adminAuth = Router();

adminAuth.post('/register', AdminAuthController.registerAdmin);
adminAuth.post('/login', AdminAuthController.loginAdmin);

export default adminAuth;
