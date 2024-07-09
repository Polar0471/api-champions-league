import { Router } from "express";
import { getPlayer } from "./controllers/players-controller";

// a router é quem deverá apontar para um controller

const router = Router() // gerenciador de rotas

router.get("/players", getPlayer)

export default router