import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import branchRouter from './routers/index.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use('/cleaning-hub-pro', branchRouter);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
