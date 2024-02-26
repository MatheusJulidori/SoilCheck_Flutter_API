import { Router } from "express";
import { getAllChecklists,createChecklist,getChecklist,deleteChecklist,updateChecklist,countChecks } from "../controllers/checklist.js";

const router = Router();

router.get("/", getAllChecklists);

router.get("/:id", getChecklist)

router.post("/", createChecklist)

router.put("/:id",updateChecklist)

router.delete("/:id", deleteChecklist)

router.post("/count_checks/:id", countChecks)

export default router;