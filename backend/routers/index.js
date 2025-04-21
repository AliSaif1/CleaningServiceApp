import { Router } from 'express'; 
import adminRouter from './admin/adminRouters.js';

const branchRouter = Router();

branchRouter.use('/admin', adminRouter);

export default branchRouter;
