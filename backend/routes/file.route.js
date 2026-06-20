import express from "express";
import { getFiles } from "../controllers/file.controller.js";

const router = express.Router();

router.get("/", getFiles);

export default router;