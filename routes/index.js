import { Router } from "express";
import userRouter from "./user.js";
import checklistRouter from "./checklist.js";
import templateRouter from "./template.js";


const router = Router();

router.use("/user", userRouter);
router.use("/checklist", checklistRouter);
router.use("/template", templateRouter);

//404 route
router.get("*", (req, res) => {
    res.status(404).send("Route not found");
})

export default router;
