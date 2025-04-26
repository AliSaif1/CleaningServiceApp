import { Router } from "express";
import userProfileController from "../../../controllers/client/userProfileController.js";
import verifyToken from '../../../middleware/verifyToken.js';

const clientProfile = Router();

clientProfile.get('/getUser/:uid', verifyToken, userProfileController.getProfile);
clientProfile.delete('/deleteUser/:uid', verifyToken, userProfileController.deleteProfile);
clientProfile.put('/update/:uid', verifyToken, userProfileController.updateProfile);

export default clientProfile;
