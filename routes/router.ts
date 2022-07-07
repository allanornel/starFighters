import { Router } from "express";
import { getRanking, postBattle } from "../controllers/controller.js";

const router = Router();

router.post("/battle", postBattle);
router.get("/ranking", getRanking);

export default router;
