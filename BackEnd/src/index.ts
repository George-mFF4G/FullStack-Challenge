import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import { dbConnection } from './database';

import announcementRoutes from './Routes/announcementRoute';
import quizRoutes from './Routes/quizRoute';

dbConnection();
const port = process.env.PORT;

const app: express.Application = express();
const address = `0.0.0.0:${port as string}`;

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

app.use('/announcements', announcementRoutes);
app.use('/quizes', quizRoutes);

app.get('/test-api', (req, res) => {
  res.send('Server Works!');
});

app.listen(port || 5000, () => {
  console.log(`server started at localhost:${address}`);
});

export default app;
