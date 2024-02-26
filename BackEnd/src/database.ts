import mongoose  from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const DB = process.env.DB_URI as string;

export const dbConnection = () => {
  mongoose.connect(DB).then((conn) => {
    console.log(`Database connection: ${conn.connection.host}`);
  });
};