import { add, get } from "../controllers/userControllers.js";
import express from "express";

const router = express.Router();

router.post("/add", add);
router.get("/", get);

export default router;
