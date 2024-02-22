import { Router } from "express";
import { getAllUsers,createUser,getUser,deleteUser,updateUser,loginUser } from "../controllers/user.js";

const router = Router();

router.get("/", getAllUsers);

router.get("/:id", getUser)

router.post("/", createUser)

router.put("/:id", updateUser)

router.delete("/:id",deleteUser)

router.post("/login", loginUser)


export default router;