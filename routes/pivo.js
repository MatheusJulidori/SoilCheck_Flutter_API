import { Router } from "express";
import { getAllPivos,createPivo,getPivo,deletePivo,updatePivo } from "../controllers/pivo.js";

const router = Router();

router.get("/", getAllPivos);

router.get("/:id", getPivo)

router.post("/", createPivo)

router.put("/:id", updatePivo)

router.delete("/:id", deletePivo)

export default router;