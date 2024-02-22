import { Router } from "express";
import { getAllTemplates,createTemplate,getTemplate,deleteTemplate,updateTemplate } from "../controllers/template.js";

const router = Router();

router.get("/", getAllTemplates);

router.get("/:id", getTemplate)

router.post("/", createTemplate)

router.put("/:id", updateTemplate)

router.delete("/:id", deleteTemplate)

export default router;