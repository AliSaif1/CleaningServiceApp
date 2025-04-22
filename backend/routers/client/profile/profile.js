import { Router } from "express";
import userProfileController from "../../../controllers/userProfileController.js";

const clientProfile = Router();

clientProfile.get('/getUser/:uid', userProfileController.getProfile);
clientProfile.delete('/deleteUser/:uid', userProfileController.deleteProfile);
clientProfile.put('/update/:uid', userProfileController.updateProfile);

export default clientProfile;
