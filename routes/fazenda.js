import { Router } from "express";
import { getAllFazendas,createFazenda,getFazenda,deleteFazenda,updateFazenda } from "../controllers/fazenda.js";

const router = Router();

router.get("/", getAllFazendas);

router.get("/:id", getFazenda)

router.post("/", createFazenda)

router.put("/:id", updateFazenda)

router.delete("/:id", deleteFazenda)

export default router;