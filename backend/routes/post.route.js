import express from 'express';
import Post from '../models/post.model.js';
import { createPost, getPost, getPosts, uploadAuth } from '../controllers/post.controller.js';

const router = express.Router();

router.get("/upload-auth", uploadAuth);
router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", createPost);



export default router;