import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Return all checklist templates");
} );

router.get("/:id", (req, res) => {
    res.send(`Return checklist template with id ${req.params.id}`);
})

router.post("/", (req, res) => {
    res.send("Create a new checklist template");
})

router.put("/:id", (req, res) => {
    res.send(`Update checklist template with id ${req.params.id}`);
})

router.delete("/:id", (req, res) => {
    res.send(`Delete checklist template with id ${req.params.id}`);
})

export default router;