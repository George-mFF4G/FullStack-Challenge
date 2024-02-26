import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import { dbConnection } from './database';

import announcementRoutes from './Routes/announcementRoute';

dbConnection();
const port = process.env.PORT;

const app: express.Application = express();
const address = `0.0.0.0:${port as string}`;

app.use(bodyParser.json());

app.use('/announcements', announcementRoutes);

app.get('/test-api', (req, res) => {
  res.send('Server Works!');
});

app.listen(port || 3000, () => {
  console.log(`server started at localhost:${address}`);
});

export default app;
