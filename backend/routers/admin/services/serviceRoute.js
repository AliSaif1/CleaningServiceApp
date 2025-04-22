import { Router } from "express";
import ServiceControler from "../../../controllers/ServiceControler.js";
import verifyToken from "../../../middleware/verifyToken.js";

const serviceRoute = Router();

serviceRoute.post('/addService', verifyToken, ServiceControler.addService);
serviceRoute.put('/updateService/:id', verifyToken, ServiceControler.updateService);
serviceRoute.delete('/deleteService/:id', verifyToken, ServiceControler.deleteService);
serviceRoute.get('/getAllServices', verifyToken, ServiceControler.getAllServices);

export default serviceRoute;
