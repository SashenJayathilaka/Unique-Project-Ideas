import express from "express";
import { getUser, getDashBoardStats } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashBoardStats);

export default router;
