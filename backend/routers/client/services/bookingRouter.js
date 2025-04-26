import { Router } from "express";
import bookingController from "../../../controllers/client/bookingController.js";
import verifyToken from '../../../middleware/verifyToken.js';

const bookingRouter = Router();

bookingRouter.get('/getBookings/:userId', verifyToken, bookingController.viewBookedServices);
bookingRouter.post('/bookService', verifyToken, bookingController.bookService);
bookingRouter.put('/updateService/:bookingId', verifyToken, bookingController.updateBooking);

export default bookingRouter;
