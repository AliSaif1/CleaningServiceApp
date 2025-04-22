import { Router } from "express";
import UserAuthController from "../../../controllers/authController.js";

const clientAuth = Router();

clientAuth.post('/register', UserAuthController.register);
clientAuth.post('/login', UserAuthController.loginUser);
clientAuth.post('/logout/:uid', UserAuthController.logoutUser);
// clientAuth.post('/resetPassword', UserAuthController.resetPassword);

export default clientAuth;
