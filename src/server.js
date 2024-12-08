import express from 'express';
import dotenv from 'dotenv';
import Server from "./index"
dotenv.config();

const app = express();
app.set('port',5050);
const server = new Server(app);