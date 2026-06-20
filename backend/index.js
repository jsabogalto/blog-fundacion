import express from 'express';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import connectDB from './lib/connectDB.js';
import webhookRouter from "./routes/webhook.route.js";
import donorRoutes from "./routes/donor.route.js";
import fileRoutes from "./routes/file.route.js"
import { clerkMiddleware } from "@clerk/express";
import cors from 'cors';
import 'dotenv/config';

const app = express();
//CORS correctamente configurado — debe ir primero
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
//middleware para sesiones de usuario
app.use(clerkMiddleware());
// Raw body para webhooks antes de express.json()
app.use("/webhooks", express.raw({ type: "application/json" }), webhookRouter);
//express
app.use(express.json());
//imagekitio middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//routes
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/donors", donorRoutes);
app.use("/files", fileRoutes);

//app config
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message || "Something went wrong!",
        status: error.status,
        stack: error.stack
    });
});
//app server
app.listen(4000, () => {
    connectDB();
    console.log('Server is running on port 4000');
});