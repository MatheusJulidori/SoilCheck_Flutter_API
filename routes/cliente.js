import { Router } from "express";
import { getAllClientes,createCliente,getCliente,deleteCliente,updateCliente } from "../controllers/cliente.js";

const router = Router();

router.get("/", getAllClientes);

router.get("/:id", getCliente)

router.post("/", createCliente)

router.put("/:id", updateCliente)

router.delete("/:id", deleteCliente)

export default router;