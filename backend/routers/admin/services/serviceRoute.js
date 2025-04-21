import { Router } from "express";
import ServiceControler from "../../../controllers/ServiceControler.js";
import verifyToken from "../../../middleware/verifyToken.js";

const serviceRoute = Router();

serviceRoute.post('/addService', verifyToken, ServiceControler.addService);

export default serviceRoute;
