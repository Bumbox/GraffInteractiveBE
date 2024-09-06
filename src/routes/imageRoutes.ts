import { Router } from "express";
import { getImgs } from "../controllers/imageController";

const router = Router();

router.get("/images", getImgs);

export default router;
