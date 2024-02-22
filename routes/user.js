import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Return all users");
} );

router.get("/:id", (req, res) => {
    res.send(`Return user with id ${req.params.id}`);
})

router.post("/", (req, res) => {
    res.send("Create a new user");
})

router.put("/:id", (req, res) => {
    res.send(`Update user with id ${req.params.id}`);
})

router.delete("/:id", (req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
})

router.post("/login", (req, res) => {
    res.send("Login user");
})


export default router;