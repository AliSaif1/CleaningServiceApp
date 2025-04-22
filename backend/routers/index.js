import { Router } from 'express'; 
import adminRouter from './admin/adminRouters.js';
import clientRouter from './client/clientRouter.js';

const branchRouter = Router();

branchRouter.use('/admin', adminRouter);
branchRouter.use('/client', clientRouter);

export default branchRouter;
