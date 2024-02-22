import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Return all checklists");
} );

router.get("/:id", (req, res) => {
    res.send(`Return checklist with id ${req.params.id}`);
})

router.post("/", (req, res) => {
    res.send("Create a new checklist");
})

router.put("/:id", (req, res) => {
    res.send(`Update checklist with id ${req.params.id}`);
})

router.delete("/:id", (req, res) => {
    res.send(`Delete checklist with id ${req.params.id}`);
})

export default router;